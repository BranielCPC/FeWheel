namespace FeWheel.Models
{
    using FeWheel;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Storage;

    class Database : DbContext
    {
        public Database(DbContextOptions<Database> options)
            : base(options) { }

        public DbSet<Data> Datas => Set<Data>();
    }
}
