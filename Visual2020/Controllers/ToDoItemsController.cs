﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Visual2020;
using Visual2020.Model;

namespace Visual2020.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoItemsController : ControllerBase
    {
        private readonly DataContext _context;

        public ToDoItemsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ToDoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoItem>>> GetToDoItemList()
        {
            return await _context.ToDoItemList.ToListAsync();
        }

        // GET: api/ToDoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoItem>> GetToDoItem(int id)
        {
            var toDoItem = await _context.ToDoItemList.FindAsync(id);

            if (toDoItem == null)
            {
                return NotFound();
            }

            return toDoItem;
        }

        // PUT: api/ToDoItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoItem(int id, ToDoItem toDoItem)
        {
            if (id != toDoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(toDoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ToDoItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ToDoItem>> PostToDoItem(ToDoItem toDoItem)
        {
            _context.ToDoItemList.Add(toDoItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToDoItem", new { id = toDoItem.Id }, toDoItem);
        }

        // DELETE: api/ToDoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ToDoItem>> DeleteToDoItem(int id)
        {
            var toDoItem = await _context.ToDoItemList.FindAsync(id);
            if (toDoItem == null)
            {
                return NotFound();
            }

            _context.ToDoItemList.Remove(toDoItem);
            await _context.SaveChangesAsync();

            return toDoItem;
        }

        private bool ToDoItemExists(int id)
        {
            return _context.ToDoItemList.Any(e => e.Id == id);
        }
    }
}
