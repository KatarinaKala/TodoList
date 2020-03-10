using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Visual2020.Model;

namespace Visual2020
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<ToDoItem> ToDoItemList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ToDoItem>().Property(p => p.Id).HasIdentityOptions(2);
            modelBuilder.Entity<ToDoItem>().HasData(
                new ToDoItem
                {
                    Id = 1,
                    Name = "Finish project",
                    Description = "gfruwokp",
                    DueDate = DateTime.Now,
                    Status = false,
                });
        }
    }
}
