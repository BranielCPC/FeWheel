using FeWheel;
using FeWheel.Models;
using Microsoft.EntityFrameworkCore;



var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContext<Database>(opt => opt.UseInMemoryDatabase("Data List"));
        builder.Services.AddDatabaseDeveloperPageExceptionFilter();
        // Add services to the container.
        builder.Services.AddRazorPages();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddAutoMapper(typeof(MappingConfig)); //Automates the mapping

var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.MapRazorPages();

        //

        RouteGroupBuilder DataItems = app.MapGroup("/Dataitems");

        DataItems.MapGet("/", GetAllData);
        DataItems.MapGet("/{id}", GetEngineer);
       // DataItems.MapPost("/", CreateEng);
        DataItems.MapPut("/{id}", UpdateData);
        DataItems.MapDelete("/{id}", DeleteData);

        app.Run();

        static async Task<IResult> GetAllData(Database db)
        {
            return TypedResults.Ok(await db.Datas.Select(x => new DataDTO(x)).ToArrayAsync());
        }

        static async Task<IResult> GetEngineer(int id, Database db)
        {
            return await db.Datas.FindAsync(id)
                is Data data
                    ? TypedResults.Ok(new DataDTO(data))
            : TypedResults.NotFound();
        }
/*
        static async Task<IResult> CreateEng(DataDTO dataDTO, Database db)
        {
            var data = new Data
            {
                IsComplete = dataDTO.IsComplete,
                Name = dataDTO.Name
            };

            db.Datas.Add(data);
            await db.SaveChangesAsync();

            return TypedResults.Created($"/Dataitems/{Data.Id}", dataDTO);
        }
*/
        static async Task<IResult> UpdateData(int id, DataDTO dataDTO, Database db)
        {
            var data = await db.Datas.FindAsync(id);

            if (data is null) return TypedResults.NotFound();

            data.Name = dataDTO.Name;
            data.IsComplete = dataDTO.IsComplete;

            await db.SaveChangesAsync();
            return TypedResults.NoContent();
        }

        static async Task<IResult> DeleteData(int id, Database db)
        {
            if (await db.Datas.FindAsync(id) is Data data)
            {
                db.Datas.Remove(data);
                await db.SaveChangesAsync();
                return TypedResults.Ok(data);
            }

            return TypedResults.NotFound();
        }
