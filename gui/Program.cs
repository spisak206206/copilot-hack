using Microsoft.EntityFrameworkCore;
using gui.Data;
using gui.Endpoints;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    ContentRootPath = AppContext.BaseDirectory
});
// Allow --urls or ASPNETCORE_URLS to override the default LAN endpoint.
builder.WebHost.UseUrls(builder.Configuration["urls"] ?? "http://0.0.0.0:5050");

// SQLite database lives in a "data" folder alongside the server binaries so it
// survives restarts and is easy to back up. Override via ASD_DATA_DIR / connection string.
var dataDir = builder.Configuration["ASD_DATA_DIR"]
    ?? Path.Combine(AppContext.BaseDirectory, "data");
Directory.CreateDirectory(dataDir);
var dbPath = Path.Combine(dataDir, "asd.db");
var connectionString = builder.Configuration.GetConnectionString("AsdDb")
    ?? $"Data Source={dbPath}";

builder.Services.AddDbContext<AsdDbContext>(options => options.UseSqlite(connectionString));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AsdDbContext>();
    db.Database.EnsureCreated();
}

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/status", () => new { system = "Autoservisny System A Diagnostika (A.S.D.)", status = "Online", version = "1.0" });

app.MapWorkOrderEndpoints();
app.MapInventoryEndpoints();
app.MapInvoiceEndpoints();

Console.WriteLine("=======================================================");
Console.WriteLine("  AUTOSERVISNÝ SYSTÉM A DIAGNOSTIKA (A.S.D.) GUI SERVER ");
Console.WriteLine("  Server beží na: http://0.0.0.0:5050 (LAN / Wi-Fi / Mobil)");
Console.WriteLine($"  Databáza: {dbPath}");
Console.WriteLine("=======================================================");

app.Run();
