function Noticias(dbConnection) {
  this._conn = dbConnection;
}

Noticias.prototype.getNoticias = function (callback) {
  this._conn.query("select * from noticias order by 1 desc", callback);
};

Noticias.prototype.getNoticiaById = function (callback) {
  this._conn.query("select * from noticias where noticia_id = 1", callback);
};

Noticias.prototype.salvarNoticia = function (noticia, callback) {
  this._conn.query("insert INTO noticias set ?", noticia, callback);
};

module.exports = function () {
  return Noticias;
};
