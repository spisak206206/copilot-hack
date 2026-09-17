namespace gui.Models;

public class WorkOrder
{
    public int Id { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public string VehiclePlate { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Status { get; set; } = "Open"; // Open, InProgress, Completed, Cancelled
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? CompletedAt { get; set; }
}

public class InventoryItem
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Sku { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}

public class Invoice
{
    public int Id { get; set; }
    public int? WorkOrderId { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Status { get; set; } = "Unpaid"; // Unpaid, Paid, Cancelled
    public DateTime IssuedAt { get; set; } = DateTime.UtcNow;
}
