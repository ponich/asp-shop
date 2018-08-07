using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;
using Shop.Extensions;

namespace Shop
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            // init logger
            Logger.InitLogger();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}