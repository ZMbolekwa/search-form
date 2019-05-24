using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class tblGamesController : ApiController
    {
        private GamesEntities db = new GamesEntities();

        // GET: api/tblGames
        public IQueryable<tblGame> GettblGames()
        {
            return db.tblGames;
        }

        // GET: api/tblGames/5
        //[ResponseType(typeof(tblGame))]
        //public IHttpActionResult GettblGame(int id)
        //{
        //    tblGame tblGame = db.tblGames.Find(id);
        //    if (tblGame == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(tblGame);
        //}

        [ResponseType(typeof(tblGame))]
        public IQueryable<tblGame> GettblGames(string gn)
        {

            var games = db.tblGames.Where(x => x.gName == gn);
            if (games == null)
            {
                return null;
            }

            return games;
        }



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblGameExists(int id)
        {
            return db.tblGames.Count(e => e.gameId == id) > 0;
        }
    }
}