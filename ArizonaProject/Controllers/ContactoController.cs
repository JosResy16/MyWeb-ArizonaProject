using Microsoft.AspNetCore.Mvc;

namespace ArizonaProject.Controllers
{
    public class ContactoController : Controller
    {
        public IActionResult Contacto()
        {
            return View(); // View 'Contacto' no creada...
        }
    }
}
