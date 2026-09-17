using Microsoft.EntityFrameworkCore;
using gui.Data;
using gui.Models;

namespace gui.Endpoints;

public static class WorkOrderEndpoints
{
    public static void MapWorkOrderEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/work-orders");

        group.MapGet("/", async (AsdDbContext db) =>
            await db.WorkOrders.OrderByDescending(w => w.CreatedAt).ToListAsync());

        group.MapGet("/{id:int}", async (int id, AsdDbContext db) =>
            await db.WorkOrders.FindAsync(id) is { } wo ? Results.Ok(wo) : Results.NotFound());

        group.MapPost("/", async (WorkOrder input, AsdDbContext db) =>
        {
            input.Id = 0;
            input.CreatedAt = DateTime.UtcNow;
            db.WorkOrders.Add(input);
            await db.SaveChangesAsync();
            return Results.Created($"/api/work-orders/{input.Id}", input);
        });

        group.MapPut("/{id:int}", async (int id, WorkOrder input, AsdDbContext db) =>
        {
            var existing = await db.WorkOrders.FindAsync(id);
            if (existing is null) return Results.NotFound();

            existing.CustomerName = input.CustomerName;
            existing.VehiclePlate = input.VehiclePlate;
            existing.Description = input.Description;
            existing.Status = input.Status;
            existing.CompletedAt = input.Status == "Completed" ? (existing.CompletedAt ?? DateTime.UtcNow) : existing.CompletedAt;

            await db.SaveChangesAsync();
            return Results.Ok(existing);
        });

        group.MapDelete("/{id:int}", async (int id, AsdDbContext db) =>
        {
            var existing = await db.WorkOrders.FindAsync(id);
            if (existing is null) return Results.NotFound();

            db.WorkOrders.Remove(existing);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }
}
