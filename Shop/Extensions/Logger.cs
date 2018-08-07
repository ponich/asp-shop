using log4net;
using log4net.Config;

namespace Shop.Extensions
{
    public static class Logger
    {
        // logger instance
        public static ILog Log { get; } = LogManager.GetLogger("LOGGER");

        // init logger
        public static void InitLogger()
        {
            XmlConfigurator.Configure();
        }
    }
}