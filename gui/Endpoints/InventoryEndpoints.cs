using Microsoft.EntityFrameworkCore;
using gui.Data;
using gui.Models;

namespace gui.Endpoints;

public static class InventoryEndpoints
{
    public static void MapInventoryEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/inventory");

        group.MapGet("/", async (AsdDbContext db) =>
            await db.InventoryItems.OrderBy(i => i.Name).ToListAsync());

        group.MapGet("/{id:int}", async (int id, AsdDbContext db) =>
            await db.InventoryItems.FindAsync(id) is { } item ? Results.Ok(item) : Results.NotFound());

        group.MapPost("/", async (InventoryItem input, AsdDbContext db) =>
        {
            input.Id = 0;
            input.UpdatedAt = DateTime.UtcNow;
            db.InventoryItems.Add(input);
            await db.SaveChangesAsync();
            return Results.Created($"/api/inventory/{input.Id}", input);
        });

        group.MapPut("/{id:int}", async (int id, InventoryItem input, AsdDbContext db) =>
        {
            var existing = await db.InventoryItems.FindAsync(id);
            if (existing is null) return Results.NotFound();

            existing.Name = input.Name;
            existing.Sku = input.Sku;
            existing.Quantity = input.Quantity;
            existing.UnitPrice = input.UnitPrice;
            existing.UpdatedAt = DateTime.UtcNow;

            await db.SaveChangesAsync();
            return Results.Ok(existing);
        });

        group.MapDelete("/{id:int}", async (int id, AsdDbContext db) =>
        {
            var existing = await db.InventoryItems.FindAsync(id);
            if (existing is null) return Results.NotFound();

            db.InventoryItems.Remove(existing);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }
}
