using FullStackReact.Server.Data;
using Microsoft.AspNetCore.Mvc;
using FullStackReact.Server.ViewModel;
using FullStackReact.Server.Domain;


namespace FullStackReact.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlanetsController : ControllerBase
    {
        private readonly PlanetContext _context;

        public PlanetsController(PlanetContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult SchoolIndex()
        {
            var result = _context.Planets
                .Select(x => new PlanetsListViewModel
                {
                    PlanetsId = x.PlanetsId,
                    Name = x.Name,
                    Description = x.Description,
                    Type = x.Type,
                    Mass = x.Mass
                });

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create(PlanetsCreateViewModel model)
        {
            var planet = new Planets
            {
                PlanetsId = Guid.NewGuid(),
                Name = model.Name,
                Description = model.Description,
                Type = model.Type,
                Mass = model.Mass
            };

            _context.Planets.Add(planet);
            _context.SaveChanges();

            return Ok(planet);
        }
    }
}
      