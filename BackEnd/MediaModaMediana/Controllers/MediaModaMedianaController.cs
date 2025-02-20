using Microsoft.AspNetCore.Mvc;

namespace MediaModaMediana.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EstatisticaController : ControllerBase
    {
        [HttpPost("Media")]
        public ActionResult<float> Media([FromQuery] List<float> listNumbers)
        {

            var media = listNumbers.Count != 0 ? (from i in listNumbers
                                                  select i).Average() : 0;
            return Ok(media);
        }

        [HttpPost("Mediana")]
        public ActionResult<float> Mediana(List<float> listNumbers)
        {
            var quantidade = listNumbers.Count();

            if (quantidade == 0)
                return Ok(0);

            var listOrderNumbers = (from i in listNumbers
                                    orderby i ascending
                                    select i).ToList();

            switch (quantidade % 2)
            {
                case 0:
                    var meio1 = listOrderNumbers[quantidade / 2];
                    var meio2 = listOrderNumbers[(quantidade / 2) - 1];
                    var mediana = (meio1 + meio2) / 2;
                    return Ok(mediana);

                case 1:
                    var meio = quantidade / 2;
                    return Ok(listOrderNumbers[meio]);
            }

            return Ok(0);
        }

        //[HttpPost("Moda")]
        //public ActionResult<float> Moda(List<float> listNumbers)
        //{
        //    var modal = 0;
        //    var moda = listNumbers.Count != 0 ?
        //        (from i in listNumbers
        //         where listNumbers.MaxBy(i, ) > modal
        //         let setModal = modal = i
        //         select true).ToList() : null;

        //    return Ok(modal);
        //}
    }
}