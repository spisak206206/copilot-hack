using Microsoft.EntityFrameworkCore;
using gui.Data;
using gui.Models;

namespace gui.Endpoints;

public static class InvoiceEndpoints
{
    public static void MapInvoiceEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/invoices");

        group.MapGet("/", async (AsdDbContext db) =>
            await db.Invoices.OrderByDescending(i => i.IssuedAt).ToListAsync());

        group.MapGet("/{id:int}", async (int id, AsdDbContext db) =>
            await db.Invoices.FindAsync(id) is { } inv ? Results.Ok(inv) : Results.NotFound());

        group.MapPost("/", async (Invoice input, AsdDbContext db) =>
        {
            input.Id = 0;
            input.IssuedAt = DateTime.UtcNow;
            db.Invoices.Add(input);
            await db.SaveChangesAsync();
            return Results.Created($"/api/invoices/{input.Id}", input);
        });

        group.MapPut("/{id:int}", async (int id, Invoice input, AsdDbContext db) =>
        {
            var existing = await db.Invoices.FindAsync(id);
            if (existing is null) return Results.NotFound();

            existing.WorkOrderId = input.WorkOrderId;
            existing.CustomerName = input.CustomerName;
            existing.Amount = input.Amount;
            existing.Status = input.Status;

            await db.SaveChangesAsync();
            return Results.Ok(existing);
        });

        group.MapDelete("/{id:int}", async (int id, AsdDbContext db) =>
        {
            var existing = await db.Invoices.FindAsync(id);
            if (existing is null) return Results.NotFound();

            db.Invoices.Remove(existing);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }
}
