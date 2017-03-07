# TSNUpdater

  This is a custom DNN8 module built for a SPA that is maintained by W5Golf Inc.  When installed in a DNN site, it allows for remote communication from the browser to the Tee Sheet software in the W5 call center, for agents to see.


# The Finished Work
  The ChooseUpdateType file is the entire module.  It includes subdirectories for Components, Scripts, Providers, and AppResources.  The BuildScripts and Documentation folders contain template data that come as part of any MS Visual Studio Project, and do not relate directly to the application's content or functionality.
  
  In the root directory you will find all the expected components of a presentation layer, including a View.html file, a CSS file, and some miscellaneous packaging files.

  The SQL install provider can be found in the Providers/DataProviders/SqlDataProviders folder and is called 00.00.01.SqlDataProvider. This creates a basic table and filestructure for the database, which has since been manually updated and altered to reflect the conventions and standards of the native W5 database and web-server.  For the sake of practicality and because it contains sensitive information, neither the database nor the web.config folder have been included in the upload.

  In the Scripts folder there are five JS files which add functionality to the UI and presenatation layer, as well as some code for communicating with the business logic.  Buttons and CrumbButtons operate directly on the user interface, whereas ItemEdit, ItemView and QuickSettings allow for in-browser manipulation of the module.  The last three files include DNN specific funcitonality including admin priveleges and paneling in the DNN CMS.

  The Services folder contains the ViewModels and Controllers which allow developers to access the database without writing SQL or opening the database management system.  As with the scripts, these include funcctionality related to the content management system, and make the workflow for the application simpler as well as storing some pertinent data.
  
# The Remaining Work
  The Components folder contains the main data access layer.  This is the piece of the application still under development, as the connection priorities and methods for single page applications varies heavily from past frameworks such as Web Forms or MVC.  Past frameworks offer a robust structure for requesting pages or models from the server, and the delineation between layers is very clear.  With a SPA using the new DNN data access layer, the traditional workflow from front-end to back-end is simplified.  
  
  Where before we had to write a method in a controller on top of an abstract method on top of a data provider in a SQLDataProvider on top of a Stored Procedure within the SQLServer, now we can simply write a single interface to which frees us from those repetitive tasks.  In this case, the interface in development is called IITemRepository.cs.  It is a basic interface which provides all the basic SQL query functions, and the main focus of our work currently is to write a custom interface which works with the old Web Forms site.
