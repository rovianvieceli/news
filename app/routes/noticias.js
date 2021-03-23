module.exports = function (app) {
  app.get("/noticias", function (req, res) {
    let dbConnection = app.config.database();
    let Noticias = new app.app.models.Noticias(dbConnection);

    Noticias.getNoticias(function (error, noticias) {
      res.render("noticias/index", { error, noticias });
    });
  });

  app.get("/noticias/show", function (req, res) {
    let dbConnection = app.config.database();
    let Noticias = new app.app.models.Noticias(dbConnection);

    Noticias.getNoticiaById(function (error, noticia) {
      res.render("noticias/show", { error, noticia });
    });
  });

  app.get("/noticias/add", function (req, res) {
    res.render("noticias/add");
  });

  app.post("/noticias/save", function (req, res) {
    let noticia = req.body;
    let dbConnection = app.config.database();
    let Noticias = new app.app.models.Noticias(dbConnection);

    Noticias.salvarNoticia(noticia, function () {
      res.redirect("/noticias");
    });
  });
};
