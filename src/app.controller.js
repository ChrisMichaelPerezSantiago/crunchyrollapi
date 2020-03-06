import { Res, Param, HttpStatus, Controller, Dependencies, Get, Bind } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.service = appService;
  }

  @Get()
  getHeader() {
    return this.service.header();
  }

  /**
   *  @api {get} /EpisodeVideoData/:epsId/:subs Video data related to the episodes for each series (anime)
   *  @apiVersion 1.0.0
   *  @apiName GetEpisodeVideoData
   *  @apiGroup EpisodeVideoData
   * 
   *  @apiParam {String} epsId   Anime episode id
   *  @apiParam {String="English" , "Español" , "Português" , "Italiano" , "Русский", "Deutsch", "Français"} subs    Subtitles for anime
   * 
   *  @apiParamExample {json} You would have to use the 'epsId' property, that you would find it in the 'episodes' property.
   *  {
   *    epsId = "es/fairy-tail/episode-278-the-lamia-scale-thanksgiving-festival-777781"
   *    subs = "Español"
   *  }
   * 
   *  @apiSuccess {String} url                     M3U8 file
   *  @apiSuccess {String} subtitle                Subtitles (text) in ass format
   *  @apiSuccess {String} type                    source type
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   *   {
   *     "data": [
   *       {
   *         "url": "https://v.vrv.co/evs/5d150ef6dd146da4cd095bed498f1820/assets/0c34738c6bc09995ca6f8960c2701788_3557928.mp4/index-v1-a1.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly92LnZydi5jby9ldnMvNWQxNTBlZjZkZDE0NmRhNGNkMDk1YmVkNDk4ZjE4MjAvYXNzZXRzLzBjMzQ3MzhjNmJjMDk5OTVjYTZmODk2MGMyNzAxNzg4XyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODM0NDQyNjZ9fX1dfQ__&Signature=BNyw9-i3WDYdMXkRZtWVXC015Ry8Yferw0Xy2TiNI3ouSZR~2jdqogdV7bFSjBcxNZmb-U1ZLqQZTNhlh1uxsTwMXTc-vn01dAD29jZATt7Y1pLIKoTMWHCM9RtMv7eSVPjYq0dLHISRVFe7u7fZTs3--FXmKI9ZiTHJElD0u7Ln1Ajvkjrcyl9k8kuuj3vMLs-4P6vvnuy55LOkS0UUoKSjpFm8GVt40Ld9ZsrxMMBg963D7sWTDus-O4sflrv4k-mOXKcZRJJhLmhyMJ6pIPAMg90Lm6nElzTQWTjbRFK34RU-jOIYn~P7VKoDVhIl9gakd0tQd9BNgzadvvdBog__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
   *         "subtitle": "[Script Info]\nTitle: Español\nScriptType: v4.00+\nWrapStyle: 0\nPlayResX: 640\nPlayResY: 360\nSubtitle ID: 336004\nLanguage: Español (América Latina)\nCreated: 2018-10-13 10:31:23\n\n[V4+ Styles]\nFormat: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,Bold,Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,Alignment,MarginL,MarginR,MarginV,Encoding\nStyle: Gen_Main,Trebuchet MS,24,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,2,1,2,0010,0010,0018,1\nStyle: Gen_Italics,Trebuchet MS,24,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,1,0,0,100,100,0,0,1,2,1,2,0010,0010,0018,1\nStyle: Gen_Main_Up,Trebuchet MS,24,&H00FFFFFF,&H000000FF,&H00000000,&H00090909,0,0,0,0,100,100,0,0,1,2,1,8,0010,0010,0018,1\nStyle: Gen_Italics_top,Trebuchet MS,24,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,1,0,0,100,100,0,0,1,2,1,8,0010,0010,0018,1\nStyle: Gen_Avance,Arial,28,&H000D00D3,&H000000FF,&H00060503,&H00000000,1,0,0,0,100,100,0,0,1,3,2,8,0020,0020,0100,1\nStyle: Gen_Next,Times New Roman,22,&H00FFFFFF,&H000000FF,&H00060503,&H00060503,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0030,1\nStyle: Gen_Nota,Trebuchet MS,20,&H00FFFFFF,&H000000FF,&H00262626,&H00505050,0,1,0,0,100,100,0,0,1,2,1,8,0010,0010,0018,1\nStyle: Cart_A_Tre,Trebuchet MS,22,&H00FFFFFF,&H000000FF,&H00303030,&H00000000,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0020,1\nStyle: Cart_B_Tre,Trebuchet MS,24,&H00323232,&H000000FF,&H00D9D9D9,&H00D9D9D9,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0020,1\nStyle: Cart_C_Tre,Trebuchet MS,22,&H00000000,&H000000FF,&H00FFFFFF,&H00FFFFFF,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0020,1\nStyle: Cart_A_Tim,Times New Roman,24,&H00FFFFFF,&H000000FF,&H00303030,&H00303030,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0020,1\nStyle: Cart_B_Tim,Times New Roman,24,&H00323232,&H000000FF,&H00D9D9D9,&H00D9D9D9,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0020,1\nStyle: Cart_C_Tim,Times New Roman,24,&H00323232,&H000000FF,&H00FFFFFF,&H00FFFFFF,1,0,0,0,100,100,0,0,1,2,1,8,0020,0020,0020,1\nStyle: Edit_Margin,Trebuchet MS,24,&H00FFFFFF,&H000000FF,&H0063110A,&H00000000,0,0,0,0,100,100,0,0,1,2,0,8,0010,0010,0010,1\n\n[Events]\nFormat: Layer,Start,End,Style,Name,MarginL,MarginR,MarginV,Effect,Text\nDialogue: 0,0:00:10.21,0:00:14.80,'Gen_Main,,0000,0000,0000,,Nuestro gremio era una hermosa parte\\Nde esta cálida ciudad,\nDialogue: 0,0:00:15.14,0:00:17.55,'Gen_Main,,0000,0000,0000,,pero ahora se ve fría y torcida.\nDialogue: 0,0:00:23.60,0:00:25.00,'Gen_Main,,0000,0000,0000,,Pescado…\nDialogue: 0,0:00:31.82,0:00:35.03,'Gen_Main,,0000,0000,0000,,Duerman ahora, amigos míos.\nDialogue: 0,0:00:38.12,0:00:41.95,'Gen_Main,,0000,0000,0000,,Este podría ser el último amanecer.\nDialogue: 0,0:00:43.33,0:00:47.00,'Gen_Main,,0000,0000,0000,,Descansen bien.\nDialogue: 0,0:00:48.50,0:00:51.23,'Gen_Main,,0000,0000,0000,,No, no será el último.\nDialogue: 0,0:00:51.84,0:00:54.99,'Gen_Main,,0000,0000,0000,,Sí. Nada nos detendrá.\nDialogue: 0,0:00:56.18,0:00:58.62,'Gen_Main,,0000,0000,0000,,Seguimos aquí.\nDialogue: 0,0:00:58.85,0:01:02.64,'Gen_Main,,0000,0000,0000,,Sí. Aún no hemos terminado.\nDialogue: 0,0:01:02.64,0:01:03.95,'Gen_Main,,0000,0000,0000,,Vamos, Natsu.\nDialogue: 0,0:01:05.14,0:01:07.71,'Gen_Main,,0000,0000,0000,,Recuperaremos nuestro gremio.\nDialogue: 0,0:01:10.73,0:01:14.22,'Gen_Main,,0000,0000,0000,,Lo haremos. Por el mañana.\nDialogue: 0,0:01:15.15,0:01:15.97,'Gen_Main,,0000,0000,0000,,Sí.\nDialogue: 0,0:01:16.45,0:01:17.15,'Gen_Main,,0000,0000,0000,,Sí.\nDialogue: 0,0:01:17.15,0:01:18.22,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:01:18.53,0:01:19.32,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:01:19.64,0:01:20.72,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:01:21.66,0:01:23.97,'Gen_Italics,,0000,0000,0000,,Esa fue la mañana que empezó.\nDialogue: 0,0:01:24.62,0:01:28.21,'Gen_Italics,,0000,0000,0000,,¡La última batalla de Fairy Tail!\nDialogue: 0,0:03:09.52,0:03:11.02,'Gen_Italics,,0000,0000,0000,,Llegó el momento.\nDialogue: 0,0:03:41.76,0:03:45.07,'Cart_C_Tre,,0000,0000,0000,,El Festival de Día de Gracias\\Nde Lamia Scale\nDialogue: 0,0:03:49.73,0:03:51.58,'Gen_Main,,0000,0000,0000,,Tengo hambre.\nDialogue: 0,0:03:52.19,0:03:54.76,'Gen_Main,,0000,0000,0000,,¿Quieres mi pescado?\nDialogue: 0,0:03:55.02,0:03:57.61,'Gen_Main,,0000,0000,0000,,No a menos que esté cocido.\nDialogue: 0,0:03:57.61,0:04:01.84,'Gen_Main,,0000,0000,0000,,No seas tonto.\\NEl pescado es mejor crudo.\nDialogue: 0,0:04:02.24,0:04:06.58,'Gen_Main,,0000,0000,0000,,Después de un año,\\Nno han cambiado nada.\nDialogue: 0,0:04:06.58,0:04:10.85,'Gen_Main,,0000,0000,0000,,Hacen parecer que no pasó tanto tiempo.\nDialogue: 0,0:04:11.16,0:04:13.90,'Gen_Main,,0000,0000,0000,,Lucy, ¿aún no llegamos?\nDialogue: 0,0:04:14.71,0:04:16.86,'Gen_Main,,0000,0000,0000,,Solo un poco más.\nDialogue: 0,0:04:19.21,0:04:22.78,'Gen_Main,,0000,0000,0000,,¡Qué grande! ¡Y lindo!\\N¡¿Qué es eso?!\nDialogue: 0,0:04:23.18,0:04:25.77,'Gen_Main,,0000,0000,0000,,¡Conozco a ese monstruo!\nDialogue: 0,0:04:25.77,0:04:27.78,'Gen_Main,,0000,0000,0000,,¡Atrae a la gente con su pelaje afelpado\nDialogue: 0,0:04:28.05,0:04:31.64,'Gen_Main,,0000,0000,0000,,y se los come enteros!\nDialogue: 0,0:04:37.86,0:04:39.55,'Gen_Main,,0000,0000,0000,,¡Natsu, vamos!\nDialogue: 0,0:04:41.03,0:04:42.05,'Gen_Main,,0000,0000,0000,,No tengo ganas.\nDialogue: 0,0:04:42.28,0:04:43.70,'Gen_Main,,0000,0000,0000,,¡¿Cómo que no?!\nDialogue: 0,0:04:43.70,0:04:45.88,'Gen_Main,,0000,0000,0000,,Escuché que son muy sabrosos.\nDialogue: 0,0:04:46.20,0:04:48.39,'Gen_Main,,0000,0000,0000,,¿Qué? ¡¿En serio?!\nDialogue: 0,0:04:53.79,0:04:55.71,'Gen_Main,,0000,0000,0000,,¡Bueno, a comer!\nDialogue: 0,0:04:56.17,0:04:58.25,'Gen_Main,,0000,0000,0000,,Está bien crudo, ¿verdad, Lucy?\nDialogue: 0,0:04:58.25,0:04:59.48,'Gen_Main,,0000,0000,0000,,¡Oigan!\nDialogue: 0,0:05:03.05,0:05:05.34,'Gen_Main,,0000,0000,0000,,¡Esto es genial!\\N¡No puedo dejar de comer!\nDialogue: 0,0:05:05.34,0:05:08.12,'Gen_Main,,0000,0000,0000,,A pesar de su apariencia,\\Ntiene buen sabor.\nDialogue: 0,0:05:08.43,0:05:12.12,'Gen_Main,,0000,0000,0000,,Nada es mejor que el pescado crudo.\nDialogue: 0,0:05:16.85,0:05:18.63,'Gen_Main,,0000,0000,0000,,¿Qué pasa? ¿No comerás?\nDialogue: 0,0:05:19.48,0:05:23.63,'Gen_Main,,0000,0000,0000,,Pensaba que esa batalla\\Nse siente muy distante.\nDialogue: 0,0:05:26.24,0:05:27.63,'Gen_Main,,0000,0000,0000,,Contra Tártaros.\nDialogue: 0,0:05:33.37,0:05:36.43,'Gen_Main,,0000,0000,0000,,Eran muy fuertes.\nDialogue: 0,0:05:37.10,0:05:41.04,'Gen_Main,,0000,0000,0000,,Pero nosotros lo fuimos más, ¿verdad?\nDialogue: 0,0:05:42.88,0:05:46.07,'Gen_Main,,0000,0000,0000,,Sí, así es.\nDialogue: 0,0:06:04.32,0:06:06.91,'Gen_Main,,0000,0000,0000,,Ganamos al final, ¿verdad?\nDialogue: 0,0:06:07.45,0:06:08.26,'Gen_Main,,0000,0000,0000,,Sí.\nDialogue: 0,0:06:08.61,0:06:11.26,'Gen_Main,,0000,0000,0000,,Aun así, ¿no es algo cruel?\nDialogue: 0,0:06:11.58,0:06:12.45,'Gen_Main,,0000,0000,0000,,¿Qué cosa?\nDialogue: 0,0:06:12.45,0:06:16.87,'Gen_Main,,0000,0000,0000,,El maestro de pronto\\Nseparó el gremio después de eso.\nDialogue: 0,0:06:17.84,0:06:21.77,'Gen_Main,,0000,0000,0000,,Debió tener sus razones. Pero…\nDialogue: 0,0:06:22.04,0:06:23.42,'Gen_Main,,0000,0000,0000,,Pero ¿qué?\nDialogue: 0,0:06:23.42,0:06:27.36,'Gen_Main,,0000,0000,0000,,Me negaba a rendirme, así que…\nDialogue: 0,0:06:27.36,0:06:29.82,'Gen_Main,,0000,0000,0000,,No dejo de decirlo,\nDialogue: 0,0:06:29.82,0:06:33.33,'Gen_Main,,0000,0000,0000,,pero me alegra encontrarlos de nuevo.\nDialogue: 0,0:06:34.39,0:06:40.77,'Gen_Main,,0000,0000,0000,,Ahora podemos buscar\\Na los demás miembros del gremio.\nDialogue: 0,0:06:40.77,0:06:43.02,'Gen_Main,,0000,0000,0000,,¡Oye, ¿qué crees que haces?!\nDialogue: 0,0:06:44.02,0:06:47.03,'Gen_Main,,0000,0000,0000,,¡Te dije que asado queda mejor!\nDialogue: 0,0:06:47.03,0:06:50.66,'Gen_Main,,0000,0000,0000,,¡Qué malo, Natsu!\\N¡Haz que vuelva a estar crudo!\nDialogue: 0,0:06:50.66,0:06:52.99,'Gen_Main,,0000,0000,0000,,De acuerdo. Déjamelo a mí.\nDialogue: 0,0:06:54.53,0:06:58.20,'Gen_Main,,0000,0000,0000,,¡Lo harás cenizas! ¡Idiota!\nDialogue: 0,0:06:58.20,0:07:00.21,'Gen_Main,,0000,0000,0000,,¡Lo siento!\nDialogue: 0,0:07:00.21,0:07:03.21,'Gen_Main,,0000,0000,0000,,¡No llores! ¡Iré a pescar más!\nDialogue: 0,0:07:03.21,0:07:05.59,'Gen_Italics,,0000,0000,0000,,No sirve sentir nostalgia.\nDialogue: 0,0:07:09.09,0:07:10.43,'Gen_Main,,0000,0000,0000,,¿Dónde estamos?\nDialogue: 0,0:07:10.43,0:07:11.82,'Gen_Main,,0000,0000,0000,,La aldea Tuly.\nDialogue: 0,0:07:12.47,0:07:14.48,'Gen_Main,,0000,0000,0000,,Pasemos la noche aquí.\nDialogue: 0,0:07:14.80,0:07:15.58,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:07:17.14,0:07:19.02,'Gen_Main,,0000,0000,0000,,¿Qué pasa, Natsu?\nDialogue: 0,0:07:21.60,0:07:25.57,'Gen_Main,,0000,0000,0000,,Ah, la torre del reloj\\Nque destruiste hace mucho.\nDialogue: 0,0:07:25.57,0:07:28.01,'Gen_Main,,0000,0000,0000,,Sí. La arreglaron.\nDialogue: 0,0:07:28.28,0:07:31.15,'Gen_Main,,0000,0000,0000,,Pero hay una parte grande\\Nque no coincide.\nDialogue: 0,0:07:31.15,0:07:32.01,'Gen_Main,,0000,0000,0000,,Sí.\nDialogue: 0,0:07:33.20,0:07:34.89,'Gen_Main,,0000,0000,0000,,¿La rompo de nuevo?\nDialogue: 0,0:07:34.89,0:07:36.51,'Gen_Main,,0000,0000,0000,,¡Ni se te ocurra!\nDialogue: 0,0:07:40.54,0:07:42.54,'Gen_Main,,0000,0000,0000,,¡Quiero romper algo!\nDialogue: 0,0:07:42.54,0:07:45.52,'Gen_Main,,0000,0000,0000,,¡Entrené para hacerme fuerte,\\N¿y ahora qué?!\nDialogue: 0,0:07:46.21,0:07:51.14,'Gen_Main,,0000,0000,0000,,¡Peleé contra el equipo ganador\\Nde ese torneo y no servían de nada!\nDialogue: 0,0:07:51.63,0:07:54.39,'Gen_Main,,0000,0000,0000,,¡Hasta pensaba\\Npatearle el trasero a Gray\nDialogue: 0,0:07:54.39,0:07:58.54,'Gen_Main,,0000,0000,0000,,y luego pelear con Erza\\Ny Laxus apenas volviera!\nDialogue: 0,0:07:58.85,0:08:03.27,'Gen_Main,,0000,0000,0000,,Gray es una cosa, pero es absurdo\\Npelear contra Erza y Laxus.\nDialogue: 0,0:08:03.27,0:08:04.54,'Gen_Main,,0000,0000,0000,,¿Él no cuenta?\nDialogue: 0,0:08:05.27,0:08:07.52,'Gen_Main,,0000,0000,0000,,¡Me conformo contigo! ¡Peleemos!\nDialogue: 0,0:08:07.52,0:08:08.55,'Gen_Main,,0000,0000,0000,,¡No!\nDialogue: 0,0:08:09.28,0:08:15.41,'Gen_Main,,0000,0000,0000,,Aunque también tuve\\Nun entrenamiento secreto.\nDialogue: 0,0:08:16.41,0:08:21.06,'Gen_Main,,0000,0000,0000,,No te vencería en una pelea en serio,\\Npero podemos practicar un poco.\nDialogue: 0,0:08:23.25,0:08:24.37,'Gen_Main,,0000,0000,0000,,¡Espera!\nDialogue: 0,0:08:24.37,0:08:25.40,'Gen_Main,,0000,0000,0000,,¿Qué?\nDialogue: 0,0:08:30.46,0:08:32.69,'Gen_Main,,0000,0000,0000,,¡Regresen!\nDialogue: 0,0:08:33.13,0:08:37.20,'Gen_Main,,0000,0000,0000,,¡Ahí están mis herramientas!\\N¡Las necesito!\nDialogue: 0,0:08:37.43,0:08:39.22,'Gen_Main,,0000,0000,0000,,¡Piérdete!\nDialogue: 0,0:08:39.22,0:08:42.77,'Gen_Main,,0000,0000,0000,,¡Te lo mereces por vagar solo por aquí!\nDialogue: 0,0:08:42.77,0:08:44.71,'Gen_Main,,0000,0000,0000,,¡Así es!\nDialogue: 0,0:08:53.49,0:08:56.45,'Gen_Main,,0000,0000,0000,,¡Oye! ¡¿Qué crees que haces?!\nDialogue: 0,0:08:56.45,0:08:58.14,'Gen_Main,,0000,0000,0000,,¡Nada!\nDialogue: 0,0:08:58.32,0:09:01.45,'Gen_Main,,0000,0000,0000,,¡También me hice muy fuerte, ¿eh?!\nDialogue: 0,0:09:01.45,0:09:03.91,'Gen_Main,,0000,0000,0000,,No tengo ganas. Olvídalo.\nDialogue: 0,0:09:03.91,0:09:05.32,'Gen_Main,,0000,0000,0000,,¡Oye!\nDialogue: 0,0:09:10.34,0:09:13.19,'Gen_Main,,0000,0000,0000,,¿No sabes dónde están todos?\nDialogue: 0,0:09:13.59,0:09:19.20,'Gen_Main,,0000,0000,0000,,Hice lo que pude,\\Npero no pude localizarlos a todos.\nDialogue: 0,0:09:19.20,0:09:20.81,'Gen_Main,,0000,0000,0000,,¿En serio?\nDialogue: 0,0:09:20.81,0:09:25.48,'Gen_Main,,0000,0000,0000,,Podemos empezar en el sureste,\\Nen la ciudad de Marguerite.\nDialogue: 0,0:09:25.48,0:09:28.23,'Gen_Main,,0000,0000,0000,,Ahí está Lamia Scale.\nDialogue: 0,0:09:28.23,0:09:29.96,'Gen_Main,,0000,0000,0000,,¡El gremio de Lyon y Jura!\nDialogue: 0,0:09:30.40,0:09:32.32,'Gen_Main,,0000,0000,0000,,¡Será bueno para probar mi habilidad!\nDialogue: 0,0:09:32.32,0:09:34.01,'Gen_Main,,0000,0000,0000,,El tipo perro también está ahí.\nDialogue: 0,0:09:35.15,0:09:39.53,'Gen_Main,,0000,0000,0000,,Y adivinen quién es miembro\\Nde Lamia Scale ahora.\nDialogue: 0,0:09:42.20,0:09:43.75,'Gen_Main,,0000,0000,0000,,¿El Rey Celestial?\nDialogue: 0,0:09:43.75,0:09:45.54,'Gen_Main,,0000,0000,0000,,¿Un pescado?\nDialogue: 0,0:09:45.54,0:09:47.25,'Gen_Main,,0000,0000,0000,,Tontos.\nDialogue: 0,0:09:50.71,0:09:53.53,'Gen_Main,,0000,0000,0000,,¡Primero, la helada actuación\nDialogue: 0,0:09:54.06,0:09:57.40,'Gen_Main,,0000,0000,0000,,de la estrella de Lamia Scale, Lyon!\nDialogue: 0,0:10:27.25,0:10:30.42,'Gen_Main,,0000,0000,0000,,¡Admiren el espectáculo\\Nde imitaciones de Toby!\nDialogue: 0,0:10:32.67,0:10:35.05,'Gen_Main,,0000,0000,0000,,Este soy yo llorando.\nDialogue: 0,0:10:38.72,0:10:40.47,'Gen_Main,,0000,0000,0000,,¿Se imita a sí mismo?\nDialogue: 0,0:10:40.47,0:10:41.95,'Gen_Main,,0000,0000,0000,,¿Eso es una imitación?\nDialogue: 0,0:10:42.30,0:10:43.64,'Gen_Main,,0000,0000,0000,,Lo sentimos.\nDialogue: 0,0:10:43.64,0:10:45.31,'Gen_Main,,0000,0000,0000,,¡No he terminado!\nDialogue: 0,0:10:45.31,0:10:48.71,'Gen_Main,,0000,0000,0000,,Y ahora, un acto oriental\\Nde nuestra maestra.\nDialogue: 0,0:11:00.57,0:11:01.62,'Gen_Main,,0000,0000,0000,,¡Me desnudaré!\nDialogue: 0,0:11:03.03,0:11:04.24,'Gen_Main,,0000,0000,0000,,Lo sentimos.\nDialogue: 0,0:11:04.24,0:11:07.04,'Gen_Main,,0000,0000,0000,,¡No he terminado! ¡No me hagas girar!\nDialogue: 0,0:11:07.04,0:11:10.21,'Gen_Main,,0000,0000,0000,,Y ahora, lo que esperaban.\nDialogue: 0,0:11:11.46,0:11:12.73,'Gen_Main,,0000,0000,0000,,¿Un festival?\nDialogue: 0,0:11:13.04,0:11:14.82,'Gen_Main,,0000,0000,0000,,Se ve muy divertido.\nDialogue: 0,0:11:15.21,0:11:17.23,'Gen_Main,,0000,0000,0000,,Menos mal. Llegamos a tiempo.\nDialogue: 0,0:11:17.67,0:11:20.24,'Gen_Main,,0000,0000,0000,,Los queridos ángeles de nuestro gremio.\nDialogue: 0,0:11:22.18,0:11:26.97,'Gen_Main,,0000,0000,0000,,¡Las Hermanas del Cielo!\\N¡Chelia y Wendy!\nDialogue: 0,0:11:40.32,0:11:44.03,'Gen_Main,,0000,0000,0000,,Y ahora, las Hermanas del Cielo,\\NChelia y Wendy,\nDialogue: 0,0:11:44.03,0:11:47.33,'Gen_Main,,0000,0000,0000,,con su canción {\\i1}Tenshi ni Met's Love{\\i0}.\nDialogue: 0,0:11:47.33,0:11:50.27,'Gen_Main,,0000,0000,0000,,Wendy siempre fue amiga de Chelia.\nDialogue: 0,0:11:50.46,0:11:53.67,'Gen_Italics,,0000,0000,0000,,¡Siento \"met's\" calor en mi corazón!\nDialogue: 0,0:11:53.67,0:11:56.54,'Gen_Italics,,0000,0000,0000,,¡Espero que no lo note!\nDialogue: 0,0:11:56.54,0:12:02.76,'Gen_Italics,,0000,0000,0000,,¡No soy un ángel! ¡Estoy creciendo!\nDialogue: 0,0:12:03.97,0:12:10.10,'Gen_Italics,,0000,0000,0000,,Olvídate de las alas vistosas.\nDialogue: 0,0:12:10.10,0:12:16.19,'Gen_Italics,,0000,0000,0000,,¡Mejor toma mi mano…\nDialogue: 0,0:12:16.19,0:12:19.32,'Gen_Italics,,0000,0000,0000,,y \"met's\" caminemos!\nDialogue: 0,0:12:19.32,0:12:22.32,'Gen_Main,,0000,0000,0000,,¡Met's love! ¡Met's Love! ¡Forever!\nDialogue: 0,0:12:22.32,0:12:23.74,'Gen_Italics,,0000,0000,0000,,¡Con sentimientos de amor…\nDialogue: 0,0:12:23.74,0:12:25.41,'Gen_Italics,,0000,0000,0000,,…{\\i0}forever{\\i1}!\nDialogue: 0,0:12:25.41,0:12:26.91,'Gen_Italics,,0000,0000,0000,,¡Y mirándote…\nDialogue: 0,0:12:26.91,0:12:28.53,'Gen_Italics,,0000,0000,0000,,…{\\i0}forever{\\i1}!\nDialogue: 0,0:12:28.53,0:12:30.50,'Gen_Main,,0000,0000,0000,,¡¿Qué está haciendo?!\nDialogue: 0,0:12:30.50,0:12:33.33,'Gen_Main,,0000,0000,0000,,Es algo pegajoso {\\i1}forever{\\i0}.\nDialogue: 0,0:12:33.33,0:12:36.52,'Gen_Main,,0000,0000,0000,,De hecho, muchos se unieron\\Na otros gremios.\nDialogue: 0,0:12:37.00,0:12:39.13,'Gen_Main,,0000,0000,0000,,Tenían que ganarse la vida.\nDialogue: 0,0:12:39.13,0:12:41.03,'Gen_Main,,0000,0000,0000,,¡No es eso!\nDialogue: 0,0:12:41.30,0:12:44.51,'Gen_Main,,0000,0000,0000,,¡¿Qué hace {\\i1}foreveando{\\i0} en el escenario?!\nDialogue: 0,0:12:44.51,0:12:46.03,'Gen_Main,,0000,0000,0000,,¡{\\i1}Forever{\\i0}!\nDialogue: 0,0:12:46.30,0:12:50.04,'Gen_Main,,0000,0000,0000,,Ah, eso. Es el Festival de Día\\Nde Gracias de Lamia Scale.\nDialogue: 0,0:12:50.31,0:12:53.56,'Gen_Main,,0000,0000,0000,,Es como el festival\\Nde la cosecha de Magnolia.\nDialogue: 0,0:12:53.56,0:12:57.94,'Gen_Main,,0000,0000,0000,,Hace que los ciudadanos\\Ny el gremio puedan unirse.\nDialogue: 0,0:12:57.94,0:13:01.38,'Gen_Main,,0000,0000,0000,,¡Haré que Wendy vuelva al buen camino!\nDialogue: 0,0:13:01.69,0:13:03.92,'Gen_Main,,0000,0000,0000,,No es que esté en uno malo.\nDialogue: 0,0:13:04.28,0:13:06.93,'Gen_Main,,0000,0000,0000,,Por cierto, ¿y Carla?\nDialogue: 0,0:13:07.78,0:13:10.43,'Gen_Main,,0000,0000,0000,,Pensé que vendrían.\nDialogue: 0,0:13:10.83,0:13:14.43,'Gen_Main,,0000,0000,0000,,Natsu, Lucy y gato macho.\nDialogue: 0,0:13:15.21,0:13:18.67,'Gen_Main,,0000,0000,0000,,Ah, lo siento. \"Happy\".\nDialogue: 0,0:13:23.13,0:13:25.59,'Gen_Main,,0000,0000,0000,,Toda la ciudad\\Nestá atrapada en el festival.\nDialogue: 0,0:13:25.59,0:13:27.26,'Gen_Italics,,0000,0000,0000,,¡Met's love! ¡Met's love!\nDialogue: 0,0:13:27.26,0:13:28.45,'Gen_Main,,0000,0000,0000,,Silencio.\nDialogue: 0,0:13:29.05,0:13:32.99,'Gen_Main,,0000,0000,0000,,Esta noche,\\Nel juicio caerá sobre Lamia Scale.\nDialogue: 0,0:13:34.18,0:13:37.00,'Gen_Main,,0000,0000,0000,,Empieza el Día de Gracias de sangre.\nDialogue: 0,0:13:38.60,0:13:42.00,'Gen_Main,,0000,0000,0000,,¡No volveré a hacer\\Nalgo tan vergonzoso!\nDialogue: 0,0:13:42.28,0:13:47.01,'Gen_Main,,0000,0000,0000,,Estabas muy linda.\\NLa gente te adora, Wendy.\nDialogue: 0,0:13:47.20,0:13:50.41,'Gen_Italics,,0000,0000,0000,,¡Met's love! ¡Met's love! ¡Forever!\nDialogue: 0,0:13:50.41,0:13:51.91,'Gen_Italics,,0000,0000,0000,,¡Forever!\nDialogue: 0,0:13:51.91,0:13:53.66,'Gen_Main,,0000,0000,0000,,¡¿Qué rayos es {\\i1}Met's love{\\i0}?!\nDialogue: 0,0:13:53.66,0:13:55.02,'Gen_Main,,0000,0000,0000,,Ignóralo.\nDialogue: 0,0:13:55.54,0:13:57.50,'Gen_Main,,0000,0000,0000,,Wendy, tienes visitas.\nDialogue: 0,0:14:00.75,0:14:01.57,'Gen_Main,,0000,0000,0000,,Hola.\nDialogue: 0,0:14:01.57,0:14:03.00,'Gen_Main,,0000,0000,0000,,Cuánto tiempo.\nDialogue: 0,0:14:03.00,0:14:04.82,'Gen_Main,,0000,0000,0000,,¡¿Qué tal, Wendy?!\nDialogue: 0,0:14:05.21,0:14:09.49,'Gen_Main,,0000,0000,0000,,¡Natsu-san! ¡Lucy-san! ¡Y Happy!\nDialogue: 0,0:14:09.89,0:14:11.80,'Gen_Main,,0000,0000,0000,,¿Has crecido?\nDialogue: 0,0:14:11.80,0:14:14.49,'Gen_Main,,0000,0000,0000,,No. Ni un poco.\nDialogue: 0,0:14:15.18,0:14:16.50,'Gen_Main,,0000,0000,0000,,Ya veo.\nDialogue: 0,0:14:17.14,0:14:18.77,'Gen_Main,,0000,0000,0000,,Bueno, vámonos.\nDialogue: 0,0:14:19.77,0:14:20.50,'Gen_Main,,0000,0000,0000,,¡Oye!\nDialogue: 0,0:14:21.77,0:14:28.45,'Gen_Main,,0000,0000,0000,,¿Van a reunirlos a todos\\Npara reconstruir Fairy Tail?\nDialogue: 0,0:14:28.45,0:14:31.66,'Gen_Main,,0000,0000,0000,,Sí. El maestro desapareció hace un año.\nDialogue: 0,0:14:31.66,0:14:34.91,'Gen_Main,,0000,0000,0000,,Seguro que tiene relación\\Ncon la separación del gremio.\nDialogue: 0,0:14:34.91,0:14:39.79,'Gen_Main,,0000,0000,0000,,El Consejo parece preocupado\\Npor el señor Makarov.\nDialogue: 0,0:14:39.79,0:14:43.09,'Gen_Main,,0000,0000,0000,,¿El Consejo? Detesto ese nombre.\nDialogue: 0,0:14:43.09,0:14:45.21,'Gen_Main,,0000,0000,0000,,Pensé que ya no había uno.\nDialogue: 0,0:14:45.21,0:14:49.68,'Gen_Main,,0000,0000,0000,,Cierto. Estuvieron en las montañas,\\Nasí que no lo sabían.\nDialogue: 0,0:14:49.68,0:14:54.14,'Gen_Main,,0000,0000,0000,,Los gremios necesitan un consejo\\Npara poder operar.\nDialogue: 0,0:14:54.14,0:14:57.56,'Gen_Main,,0000,0000,0000,,Por eso, los Diez Magos Santos\\Nse reunieron hace un año\nDialogue: 0,0:14:57.56,0:14:59.94,'Gen_Main,,0000,0000,0000,,y formaron un nuevo Consejo.\nDialogue: 0,0:15:01.10,0:15:03.54,'Gen_Main,,0000,0000,0000,,¡Jura-san también se fue ahí!\nDialogue: 0,0:15:03.54,0:15:04.74,'Gen_Main,,0000,0000,0000,,No te molestes.\nDialogue: 0,0:15:06.57,0:15:11.30,'Gen_Main,,0000,0000,0000,,Diez Magos Santos, ¿eh?\\N¡Suena muy fuerte!\nDialogue: 0,0:15:11.66,0:15:13.32,'Gen_Main,,0000,0000,0000,,¿Y el maestro también es miembro?\nDialogue: 0,0:15:13.32,0:15:16.83,'Gen_Main,,0000,0000,0000,,Debía serlo, pero desapareció.\nDialogue: 0,0:15:16.83,0:15:20.06,'Gen_Main,,0000,0000,0000,,Parece un trabajo molesto. Tal vez huyó.\nDialogue: 0,0:15:20.29,0:15:22.81,'Gen_Main,,0000,0000,0000,,Pero bueno, olvidémoslo por ahora.\nDialogue: 0,0:15:23.25,0:15:25.82,'Gen_Main,,0000,0000,0000,,¡Ven con nosotros, Wendy!\nDialogue: 0,0:15:26.34,0:15:28.34,'Gen_Main,,0000,0000,0000,,Este…\nDialogue: 0,0:15:33.59,0:15:36.33,'Gen_Main,,0000,0000,0000,,Ahora soy parte de Lamia Scale.\nDialogue: 0,0:15:37.18,0:15:39.28,'Gen_Main,,0000,0000,0000,,No puedo ir con ustedes.\nDialogue: 0,0:15:41.31,0:15:42.37,'Gen_Main,,0000,0000,0000,,¡¿Wendy?!\nDialogue: 0,0:15:42.37,0:15:43.38,'Gen_Main,,0000,0000,0000,,¿Por qué?!\nDialogue: 0,0:15:44.15,0:15:45.44,'Gen_Main,,0000,0000,0000,,Lo siento.\nDialogue: 0,0:15:46.65,0:15:49.38,'Gen_Main,,0000,0000,0000,,No necesitas preocuparte por nosotros.\nDialogue: 0,0:15:49.86,0:15:52.15,'Gen_Main,,0000,0000,0000,,Sabíamos que llegaría este día.\nDialogue: 0,0:15:53.07,0:15:55.36,'Gen_Main,,0000,0000,0000,,¡No te extrañaremos! ¡Nada de nada!\nDialogue: 0,0:15:55.36,0:15:56.39,'Gen_Main,,0000,0000,0000,,No llores.\nDialogue: 0,0:15:57.45,0:15:59.35,'Gen_Main,,0000,0000,0000,,¿Por qué no, Wendy?\nDialogue: 0,0:15:59.75,0:16:01.18,'Gen_Main,,0000,0000,0000,,Yo…\nDialogue: 0,0:16:01.46,0:16:03.40,'Gen_Main,,0000,0000,0000,,Tomó su decisión.\nDialogue: 0,0:16:04.38,0:16:06.15,'Gen_Main,,0000,0000,0000,,¿Pueden dejar de molestarla?\nDialogue: 0,0:16:07.13,0:16:08.15,'Gen_Main,,0000,0000,0000,,Carla.\nDialogue: 0,0:16:08.59,0:16:10.51,'Gen_Italics,,0000,0000,0000,,¿Por qué es humana?\nDialogue: 0,0:16:10.51,0:16:12.15,'Gen_Italics,,0000,0000,0000,,¿Por qué es humana?\nDialogue: 0,0:16:12.51,0:16:14.53,'Gen_Main,,0000,0000,0000,,¡¿Por qué eres humana?!\nDialogue: 0,0:16:14.89,0:16:18.22,'Gen_Main,,0000,0000,0000,,¿Esto? Aprendí magia de transformación.\nDialogue: 0,0:16:18.22,0:16:20.77,'Gen_Main,,0000,0000,0000,,Esta forma aumenta mi poder un poco\nDialogue: 0,0:16:20.77,0:16:22.59,'Gen_Main,,0000,0000,0000,,y mejora mi clarividencia.\nDialogue: 0,0:16:23.14,0:16:24.54,'Gen_Main,,0000,0000,0000,,¿Qué tal, Happy?\nDialogue: 0,0:16:24.98,0:16:27.04,'Gen_Main,,0000,0000,0000,,Yo también entrené.\nDialogue: 0,0:16:27.40,0:16:30.07,'Gen_Main,,0000,0000,0000,,Entrené y…\nDialogue: 0,0:16:30.07,0:16:32.99,'Gen_Main,,0000,0000,0000,,¡Ahora no como el pescado de inmediato!\nDialogue: 0,0:16:32.99,0:16:35.41,'Gen_Main,,0000,0000,0000,,¿Qué clase de entrenamiento es ese?\nDialogue: 0,0:16:37.74,0:16:40.41,'Gen_Main,,0000,0000,0000,,¿Estás segura de esto, Wendy?\nDialogue: 0,0:16:40.41,0:16:42.56,'Gen_Main,,0000,0000,0000,,¡Volvió! ¡Qué linda!\nDialogue: 0,0:16:48.25,0:16:49.84,'Gen_Main,,0000,0000,0000,,No puede ser.\nDialogue: 0,0:16:51.13,0:16:52.55,'Gen_Main,,0000,0000,0000,,Cielos.\nDialogue: 0,0:17:17.24,0:17:19.16,'Gen_Main,,0000,0000,0000,,¡Me haces cosquillas!\nDialogue: 0,0:17:21.70,0:17:23.58,'Gen_Main,,0000,0000,0000,,¡¿Qué están haciendo, pervertidos?!\nDialogue: 0,0:17:25.16,0:17:29.13,'Gen_Main,,0000,0000,0000,,¡Fue una gran sorpresa!\nDialogue: 0,0:17:29.13,0:17:30.07,'Gen_Main,,0000,0000,0000,,Sí.\nDialogue: 0,0:17:31.05,0:17:35.07,'Gen_Main,,0000,0000,0000,,Me pregunto si los demás\\Nse sentirán como Wendy.\nDialogue: 0,0:17:35.68,0:17:37.84,'Gen_Main,,0000,0000,0000,,¡No me rendiré!\nDialogue: 0,0:17:37.84,0:17:39.85,'Gen_Main,,0000,0000,0000,,¡Tendré que secuestrarla!\nDialogue: 0,0:17:39.85,0:17:41.08,'Gen_Main,,0000,0000,0000,,¡No!\nDialogue: 0,0:17:43.98,0:17:47.06,'Gen_Main,,0000,0000,0000,,Oye, Wendy. Lo de esta tarde…\nDialogue: 0,0:17:47.06,0:17:48.00,'Gen_Main,,0000,0000,0000,,Está bien.\nDialogue: 0,0:17:48.85,0:17:50.92,'Gen_Main,,0000,0000,0000,,No iré a ningún lado.\nDialogue: 0,0:17:51.86,0:17:55.76,'Gen_Main,,0000,0000,0000,,Sherry-san se casó y se mudó.\nDialogue: 0,0:17:56.20,0:18:00.28,'Gen_Main,,0000,0000,0000,,Si me voy, te quedarás sola.\nDialogue: 0,0:18:02.29,0:18:04.41,'Gen_Main,,0000,0000,0000,,No es cierto.\nDialogue: 0,0:18:05.71,0:18:09.15,'Gen_Main,,0000,0000,0000,,Aún tengo conmigo\nDialogue: 0,0:18:09.72,0:18:12.02,'Gen_Main,,0000,0000,0000,,a mis compañeros de Lamia Scale.\nDialogue: 0,0:18:13.13,0:18:16.16,'Gen_Main,,0000,0000,0000,,Quedarte por lástima\nDialogue: 0,0:18:17.01,0:18:19.75,'Gen_Main,,0000,0000,0000,,no suena a lo que haría una amiga.\nDialogue: 0,0:18:28.31,0:18:29.94,'Gen_Main,,0000,0000,0000,,¡¿Qué fue ese ruido?!\nDialogue: 0,0:18:29.94,0:18:31.17,'Gen_Main,,0000,0000,0000,,¡Viene del gremio!\nDialogue: 0,0:18:34.23,0:18:36.03,'Gen_Main,,0000,0000,0000,,¡Evacuen a la gente!\nDialogue: 0,0:18:37.49,0:18:38.47,'Gen_Main,,0000,0000,0000,,¡Por aquí!\nDialogue: 0,0:18:41.91,0:18:43.49,'Gen_Main,,0000,0000,0000,,¡¿Qué sucede?!\nDialogue: 0,0:18:43.49,0:18:44.60,'Gen_Main,,0000,0000,0000,,¡Natsu!\nDialogue: 0,0:18:47.58,0:18:49.12,'Gen_Main,,0000,0000,0000,,Justo lo que ves.\nDialogue: 0,0:18:52.84,0:18:56.71,'Gen_Main,,0000,0000,0000,,Una horda de monstruos\\Ninvadió la ciudad.\nDialogue: 0,0:18:56.71,0:18:57.80,'Gen_Main,,0000,0000,0000,,¿Una horda?\nDialogue: 0,0:18:57.80,0:18:58.78,'Gen_Main,,0000,0000,0000,,¡¿Por qué?!\nDialogue: 0,0:18:59.34,0:19:01.93,'Gen_Main,,0000,0000,0000,,¡Es el gremio de magos Orochi Fin!\nDialogue: 0,0:19:01.93,0:19:05.60,'Gen_Main,,0000,0000,0000,,¡Hace años que somos rivales!\nDialogue: 0,0:19:05.60,0:19:06.81,'Gen_Main,,0000,0000,0000,,¿Rivales?\nDialogue: 0,0:19:08.06,0:19:12.27,'Gen_Main,,0000,0000,0000,,Orochi es muy despreciable si llega\\Na usar monstruos para atacarnos.\nDialogue: 0,0:19:12.27,0:19:15.55,'Gen_Main,,0000,0000,0000,,Debieron aprovecharse\\Nde la ausencia de Jura-san.\nDialogue: 0,0:19:16.11,0:19:19.09,'Gen_Main,,0000,0000,0000,,Esperaron al festival\\Npara que bajáramos la guardia.\nDialogue: 0,0:19:19.45,0:19:20.84,'Gen_Main,,0000,0000,0000,,Malditos.\nDialogue: 0,0:19:21.29,0:19:22.09,'Gen_Main,,0000,0000,0000,,¡Lyon!\nDialogue: 0,0:19:22.70,0:19:24.49,'Gen_Main,,0000,0000,0000,,¡Es la primera oleada!\nDialogue: 0,0:19:24.49,0:19:27.08,'Gen_Main,,0000,0000,0000,,¡Viene un grupo grande por el oeste!\nDialogue: 0,0:19:27.08,0:19:28.35,'Gen_Main,,0000,0000,0000,,¡Son 100,000!\nDialogue: 0,0:19:29.16,0:19:30.14,'Gen_Main,,0000,0000,0000,,¡¿Cien mil?!\nDialogue: 0,0:19:35.50,0:19:38.21,'Gen_Main,,0000,0000,0000,,A este paso, destruirán la ciudad.\nDialogue: 0,0:19:38.21,0:19:42.82,'Gen_Main,,0000,0000,0000,,¡¿Llegarán a ese extremo, Orochi?!\nDialogue: 0,0:19:43.26,0:19:44.89,'Gen_Main,,0000,0000,0000,,¡Qué vista!\nDialogue: 0,0:19:44.89,0:19:47.83,'Gen_Main,,0000,0000,0000,,¡Despídanse de su ciudad!\nDialogue: 0,0:19:48.31,0:19:51.31,'Gen_Main,,0000,0000,0000,,Sin Jura, Lamia Scale es como un bebé.\nDialogue: 0,0:19:55.65,0:19:58.84,'Gen_Main,,0000,0000,0000,,Agotaremos su poder mágico\\Ntanto como podamos\nDialogue: 0,0:19:59.44,0:20:01.84,'Gen_Main,,0000,0000,0000,,y luego los aplastaremos.\nDialogue: 0,0:20:02.41,0:20:04.43,'Gen_Main,,0000,0000,0000,,¡Mátenlos!\nDialogue: 0,0:20:09.66,0:20:12.87,'Gen_Main,,0000,0000,0000,,Orochi debe tener\\Na un domador de monstruos.\nDialogue: 0,0:20:12.87,0:20:14.85,'Gen_Main,,0000,0000,0000,,Si logramos vencerlo…\nDialogue: 0,0:20:15.21,0:20:18.13,'Gen_Main,,0000,0000,0000,,Imposible.\\NHay muchos monstruos de por medio.\nDialogue: 0,0:20:19.96,0:20:21.86,'Gen_Main,,0000,0000,0000,,¿No podemos hacer algo?\nDialogue: 0,0:20:22.34,0:20:23.44,'Gen_Main,,0000,0000,0000,,¡Podemos volar…\nDialogue: 0,0:20:23.44,0:20:24.86,'Gen_Main,,0000,0000,0000,,…e ir por arriba!\nDialogue: 0,0:20:26.18,0:20:27.37,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:20:27.76,0:20:29.37,'Gen_Main,,0000,0000,0000,,¿Nos ayudarán?\nDialogue: 0,0:20:29.85,0:20:30.87,'Gen_Main,,0000,0000,0000,,¡Claro!\nDialogue: 0,0:20:31.48,0:20:35.31,'Gen_Main,,0000,0000,0000,,¡Estoy ardiendo! ¡Vamos, Happy!\nDialogue: 0,0:20:35.31,0:20:36.88,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:20:37.44,0:20:38.94,'Gen_Main,,0000,0000,0000,,¡Lo siento, Natsu!\nDialogue: 0,0:20:40.14,0:20:41.34,'Gen_Main,,0000,0000,0000,,¡¿Chelia?!\nDialogue: 0,0:20:42.36,0:20:43.34,'Gen_Main,,0000,0000,0000,,¿Qué?\nDialogue: 0,0:20:43.78,0:20:46.28,'Gen_Main,,0000,0000,0000,,¡Por favor, Happy, no te detengas!\nDialogue: 0,0:20:46.28,0:20:47.85,'Gen_Main,,0000,0000,0000,,¿Qué?\nDialogue: 0,0:20:48.16,0:20:51.07,'Gen_Main,,0000,0000,0000,,¡Nosotras salvaremos a Lamia Scale!\nDialogue: 0,0:20:51.50,0:20:52.35,'Gen_Main,,0000,0000,0000,,Sí.\nDialogue: 0,0:20:53.46,0:20:55.75,'Gen_Main,,0000,0000,0000,,Secuestraron a Happy.\nDialogue: 0,0:20:58.54,0:21:01.55,'Gen_Main,,0000,0000,0000,,¡La horda entró a la ciudad!\nDialogue: 0,0:21:01.55,0:21:03.23,'Gen_Main,,0000,0000,0000,,¡¿Cuántos hay?!\nDialogue: 0,0:21:04.18,0:21:06.18,'Gen_Main,,0000,0000,0000,,Debemos detenerlos.\nDialogue: 0,0:21:06.18,0:21:06.86,'Gen_Main,,0000,0000,0000,,¡Sí!\nDialogue: 0,0:21:08.51,0:21:11.37,'Gen_Main,,0000,0000,0000,,¡Ladrona de Happys!\nDialogue: 0,0:21:11.71,0:21:12.29,'Gen_Main,,0000,0000,0000,,¡¿Qué?!\nDialogue: 0,0:21:13.43,0:21:15.79,'Gen_Main,,0000,0000,0000,,¡No escaparás!\nDialogue: 0,0:21:16.22,0:21:17.18,'Gen_Main,,0000,0000,0000,,¡Natsu!\nDialogue: 0,0:21:17.18,0:21:18.38,'Gen_Main,,0000,0000,0000,,Pero ¿qué…?\nDialogue: 0,0:21:20.57,0:21:22.28,'Gen_Main,,0000,0000,0000,,¡A un lado!\nDialogue: 0,0:21:37.40,0:21:40.22,'Gen_Main,,0000,0000,0000,,¡Muévanse!\nDialogue: 0,0:23:20.89,0:23:25.25,'Gen_Main,,0000,0000,0000,,Orochi Fin lanza un ataque nocturno\\Nen la ciudad de Marguerite.\nDialogue: 0,0:23:25.67,0:23:28.92,'Gen_Main,,0000,0000,0000,,Las Hermanas del Cielo, Wendy y Chelia,\nDialogue: 0,0:23:28.92,0:23:32.45,'Gen_Main,,0000,0000,0000,,vuelan para proteger el gremio\\Ny la ciudad.\nDialogue: 0,0:23:32.45,0:23:35.72,'Gen_Main,,0000,0000,0000,,Su objetivo es el domador\\Nde monstruos del enemigo.\nDialogue: 0,0:23:36.04,0:23:40.95,'Gen_Main,,0000,0000,0000,,Pero encuentran a dos poderosos\\Nenemigos esperándolas.\nDialogue: 0,0:23:41.44,0:23:43.50,'Gen_Main,,0000,0000,0000,,Próximo episodio: \"Porque te quiero\".\nDialogue: 0,0:23:41.96,0:23:44.06,'Cart_C_Tre,,0000,0000,0000,,Porque te quiero\nDialogue: 0,0:23:44.06,0:23:49.51,'Gen_Main,,0000,0000,0000,,Las chicas pelean por el amor inmortal\\Nque habita en sus corazones.\n",
   *         "type": "application/x-mpegURL"
   *       }
   *     ]
   *   }
   * 
   * 
   */

  @Get('/EpisodeVideoData/:id([^/]+/[^/]+/[^/]+)/:sub')
  @Bind(Res(), Param('id'), Param('sub'))
  async getEpisodeVideoData(res, id, sub) {
    const data = await this.service.getEpisodeVideoData(id, sub);
    return res.status(200).json({
      data: data[0]
    });
  };


  /**
   *  @api {get} /AllAnimeSeries/:page  Get list of Anime Series (Most Polulars)
   *  @apiVersion 1.0.0
   *  @apiName GetAllAnimeSeries
   *  @apiGroup AllAnimeSeries
   * 
   *  @apiParam {Number} page Actual page
   *
   *  @apiParamExample {json} Pages from [0 to UNKNOWN LIMIT]
   *  {
   *    page = 0
   *  }
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} total_eps               Anime totoal episodes
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   *     {
   *     "data": [
   *       {
   *         "id": "es/black-clover",
   *         "title": "Black Clover",
   *         "image": "https://img1.ak.crunchyroll.com/i/spire2/1a39d39cbe3346cce5e44577cbb895041579741401_thumb.jpg",
   *         "total_eps": 125,
   *         "episodes": [
   *           {
   *             "epsId": "es/black-clover/episode-124-nero-reminisces-part-two-792260",
   *             "title": "Episodio 124",
   *             "description": "Los recuerdos de Nero y… Segunda parte)",
   *             "previewImage": "https://img1.ak.crunchyroll.com/i/spire1-tmb/76a6e2ff7720d369f50df0fce21b3d1d1583229101_widestar.jpg"
   *           },
   *           {
   *             "epsId": "es/black-clover/episode-123-nero-reminisces-part-one-792259",
   *             "title": "Episodio 123",
   *             "description": "Los recuerdos de Nero y… (Primera parte)",
   *             "previewImage": "https://img1.ak.crunchyroll.com/i/spire2-tmb/5d63624376fc3096e1f711910b32b9461582621183_wide.jpg"
   *           },
   *           //.....
   *         ]
   *       },
   *       //.....
   *     ]
   *   }
   *   
   */

  @Get('/AllAnimeSeries/:page')
  @Bind(Res(), Param('page'))
  async getAllAnimeSeries(res, page) {
    const data = await this.service.getAllAnimeSeries(page);
    return res.status(200).json({
      data: data
    });
  };


  /**
   *  @api {get} /AllSimulcasts/:page  Get list of Anime Simulcasts
   *  @apiVersion 1.0.0
   *  @apiName GetAllSimulcasts
   *  @apiGroup AllSimulcasts
   * 
   *  @apiParam {Number} page Actual page
   *
   *  @apiParamExample {json} Pages from [0 to UNKNOWN LIMIT]
   *  {
   *    page = 0
   *  }
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} total_eps               Anime totoal episodes
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  {
   *    "data": [
   *      {
   *        "id": "es/227-nanabun-no-nijyuuni",
   *        "title": "22/7 (nanabun no nijyuuni)",
   *        "image": "https://img1.ak.crunchyroll.com/i/spire3/5d59d07333b214db3e482c5eb0feef391578958040_thumb.jpg",
   *        "total_eps": 4,
   *        "episodes": [
   *          {
   *            "epsId": "es/227-nanabun-no-nijyuuni/episode-4-the-promised-flower-793661",
   *            "title": "Episodio 4",
   *            "description": "La flor prometida",
   *            "previewImage": "https://img1.ak.crunchyroll.com/i/spire1-tmb/d048f57eb83342c748edc5a96e3333a71583156083_wide.jpg"
   *          },
   *          {
   *            "epsId": "es/227-nanabun-no-nijyuuni/episode-3-hello-new-world-793660",
   *            "title": "Episodio 3",
   *            "description": "Hola a mi nuevo mundo",
   *            "previewImage": "https://img1.ak.crunchyroll.com/i/spire1-tmb/ab5a9b7b1061cea4e6e24ae04a93a6c71582556451_wide.jpg"
   *          },
   *          {
   *            "epsId": "es/227-nanabun-no-nijyuuni/episode-2-amid-the-dizziness-793659",
   *            "title": "Episodio 2",
   *            "description": "Entre el vértigo",
   *            "previewImage": "https://img1.ak.crunchyroll.com/i/spire2-tmb/7c4d3ef8635f95d47784dbd986a86e481581940069_wide.jpg"
   *          },
   *          {
   *            "epsId": "es/227-nanabun-no-nijyuuni/episode-1-goodbye-small-world-793658",
   *            "title": "Episodio 1",
   *            "description": "Adiós a mi pequeño mundo",
   *            "previewImage": "https://img1.ak.crunchyroll.com/i/spire3-tmb/216f7f5f15ccaf22e70fb00ccc44c72e1581341267_wide.jpg"
   *          }
   *        ]
   *      },
   *      //.....
   *    ]
   *  } 
   * 
   */

  @Get('/AllSimulcasts/:page')
  @Bind(Res(), Param('page'))
  async getAllSimulcasts(res, page) {
    const data = await this.service.getAllSimulcasts(page);
    return res.status(200).json({
      data: data
    });
  };

  /**
   *  @api {get} /AnimeSeriesUpdated/:page  Get list of Anime series updated
   *  @apiVersion 1.0.0
   *  @apiName GetAnimeSeriesUpdated
   *  @apiGroup AnimeSeriesUpdated
   * 
   *  @apiParam {Number} page Actual page
   *
   *  @apiParamExample {json} Pages from [0 to UNKNOWN LIMIT]
   *  {
   *    page = 0
   *  }
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} episode                 Anime latest episode added
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   * {
   *   "data": [
   *     {
   *       "id": "es/ascendance-of-a-bookworm",
   *       "title": "Ascendance of a Bookworm",
   *       "image": "https://img1.ak.crunchyroll.com/i/spire1/abb59102f88dba0b083e225db4421ee01569893751_thumb.jpg",
   *       "episode": 14,
   *       "episodes": {
   *         "epsId": "es/ascendance-of-a-bookworm/episode-14-conclusions-791469",
   *         "title": "Episodio 14",
   *         "description": "Conclusión",
   *         "previewImage": "https://img1.ak.crunchyroll.com/i/spire1-tmb/915538aac692fabe995e1c5cb85ab6981577264807_wide.jpg"
   *       }
   *     }
   *   ]
   * }
   */

  @Get('/AnimeSeriesUpdated/:page')
  @Bind(Res(), Param('page'))
  async getAllAnimeSeriesUpdated(res, page) {
    const data = await this.service.getAllAnimeSeriesUpdated(page);
    return res.status(200).json({
      data: data
    });
  };

  /**
   *  @api {get} /AnimeListByAlphabet/:letter Get list of Anime by Alphabet
   *  @apiVersion 1.0.0
   *  @apiName GetAnimeListByAlphabet
   *  @apiGroup AnimeListByAlphabet
   * 
   *  @apiParam {String="a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "numerico"} letter Letter with which the title of the anime begins
   *
   *  @apiParamExample {json} You can pass any letter of [a-z] or the word numerico
   *  {
   *    letter = "a"
   *  }
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} total_eps               Anime totoal episodes
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   *   {
   *     "data": [
   *       {
   *         "id": "es/a-centaurs-life",
   *         "title": "A Centaur's Life (Centaur no Nayami)",
   *         "image": "https://img1.ak.crunchyroll.com/i/spire3/9bcd2545e77b5c6b85fb4643e50c53241498717636_small.jpg",
   *         "total_eps": 12,
   *         "episodes": [
   *           {
   *             "epsId": "es/a-centaurs-life/episode-12-we-tried-making-a-fantasy-story-in-rpg-style-fierce-fights-arm-wrestling-how-will-the-battle-of-the-heroines-end-742045",
   *             "title": "Episodio 12",
   *             "description": "Intentamos hacer una historia de fantasía estilo RPG",
   *             "previewImage": "https://img1.ak.crunchyroll.com/i/spire4-tmb/ef4d07089107f66217654772cc6573d61506250934_wide.jpg"
   *           },
   *           {
   *             "epsId": "es/a-centaurs-life/episode-11-there-are-as-many-names-of-flowers-as-there-are-people-but-thats-totally-a-lie-there-are-as-many-types-of-beauty-as-there-are-people-which-is-probably-true-if-used-in-a-broad-sense-742043",
   *             "title": "Episodio 11",
   *             "description": "Hay tantos tipos de belleza como personas, que probablemente sea cierto en cierto sentido",
   *             "previewImage": "https://img1.ak.crunchyroll.com/i/spire3-tmb/33b3a67ed99d9a0061e09ef1a099fbce1505326564_wide.jpg"
   *           },
   *           //.....
   *         ]
   *       }
   *     ]
   *   }
   * 
   * 
   */

  @Get('/AnimeListByAlphabet/:letter')
  @Bind(Res(), Param('letter'))
  async getAnimeListByAlphabet(res, letter) {
    const data = await this.service.getAnimeListByAlphabet(letter);
    return res.status(200).json({
      data: data
    });
  };


  /**
   *  @api {get} /Drama Get list of Drama (Live Action)
   *  @apiVersion 1.0.0
   *  @apiName GetDrama
   *  @apiGroup Drama
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} total_eps               Anime totoal episodes
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  
   *  
   *   {
   *     "data": [
   *      {
   *        "id": "es/anohana-the-flower-we-saw-that-day-drama",
   *        "title": "Anohana: La flor que vimos ese día",
   *        "image": "https://img1.ak.crunchyroll.com/i/spire3/b328ed36104495b95c04c514b4c2b6ef1442958547_thumb.jpg",
   *        "total_eps": 1,
   *        "episodes": [
   *          {
   *            "epsId": "es/anohana-the-flower-we-saw-that-day-drama/anohana-the-flower-we-saw-that-day-drama-anohana-an-no-sabemos-el-nombre-de-la-flor-que-vimos-ese-da-685917",
   *            "title": "Episodio SP",
   *            "description": "Anohana: Aún no sabemos el nombre de la flor que vimos ese día",
   *            "previewImage": "https://img1.ak.crunchyroll.com/i/spire4-tmb/9d81a5d7cc1d92a4ed766edc2eae9d711442876657_wide.jpg"
   *          }
   *        ]
   *      },
   *      //.....
   *    ]
   *  } 
   *       
   *     
   *   
   **/
  @Get('/Drama/')
  @Bind(Res())
  async getAllLiveActionDrama(res) {
    const data = await this.service.getAllLiveActionDrama();
    return res.status(200).json({
      data: data
    });
  };


  /**
   *  @api {get} /Genres/:genre/:page Filter anime by genre
   *  @apiVersion 1.0.0
   *  @apiName GetGenres
   *  @apiGroup Genres
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} total_eps               Anime totoal episodes
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   *  @apiParam {String="action","adventure","comedy", "drama", "fantasy", "harem", "historical", "magical_girls","idols", "isekai", "sci-fi", "mecha", "music", "mystery", "post-apocalyptic", "romance","seinen", "shojo", "shonen", "slice_of_life", "sports", "supernatural", "thriller"} genre  Anime type
   *  @apiParam {Number} page   Actual page
   * 
   *  @apiParamExample {json} You can pass any letter of [a-z] or the word numerico
   *  {
   *    genre = "action"
   *    page = 0
   *  }
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   *   {
   *     "data": [
   *       {
   *         "id": "es/cerberus",
   *         "title": "Cerberus",
   *         "image": "https://img1.ak.crunchyroll.com/i/spire3/0d3a3b9f3a98c68aee053c0bd4bd209b1459791495_thumb.jpg",
   *         "total_eps": 13,
   *         "episodes": [
   *           {
   *             "epsId": "es/cerberus/episode-13-dragons-heart-702477",
   *             "title": "Episodio 13",
   *             "description": "Corazón de dragón",
   *             "previewImage": "https://img1.ak.crunchyroll.com/i/spire2-tmb/6ac508cccca0b90cee5daed1c1d4c5ed1466548684_wide.jpg"
   *           },
   *           //.....
   *         ]
   *       }
   *     ]
   *   }
   *  
   */

  @Get('/Genres/:genre/:page')
  @Bind(Res() , Param('genre') , Param('page'))
  async getAnimeListByGenres(res , genre , page){
    const data = await this.service.getAnimeListByGenres(genre , page);
    return res.status(200).json({
      data: data
    });
  };



  /**
   *  @api {get} /AnimeListBySeasons/:season/:page Get list of anime by season
   *  @apiVersion 1.0.0
   *  @apiName GetAnimeListBySeasons
   *  @apiGroup AnimeListBySeasons
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {Number} total_eps               Anime totoal episodes
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   *  @apiParam {String="winter-2020", "fall-2019", "summer-2019", "spring-2019", "fall-2018", "summer-2018", "spring-2018", "winter-2018"} Seasons
   *  @apiParam {Number} page Actual page
   * 
   *  @apiParamExample {json} You can use any value from the season list. Pages from [0 to UNKNOWN LIMIT]
   *  {
   *    season = "winter-2020"
   *    page = 0
   *  }
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   *  {
   *    "data": [
   *    {
   *      "id": "es/227-nanabun-no-nijyuuni",
   *      "title": "22/7 (nanabun no nijyuuni)",
   *      "image": "https://img1.ak.crunchyroll.com/i/spire3/5d59d07333b214db3e482c5eb0feef391578958040_thumb.jpg",
   *      "total_eps": 4,
   *      "episodes": [
   *        {
   *          "epsId": "es/227-nanabun-no-nijyuuni/episode-4-the-promised-flower-793661",
   *          "title": "Episodio 4",
   *          "description": "La flor prometida",
   *          "previewImage": "https://img1.ak.crunchyroll.com/i/spire1-tmb/d048f57eb83342c748edc5a96e3333a71583156083_wide.jpg"
   *        },
   *        {
   *          "epsId": "es/227-nanabun-no-nijyuuni/episode-3-hello-new-world-793660",
   *          "title": "Episodio 3",
   *          "description": "Hola a mi nuevo mundo",
   *          "previewImage": "https://img1.ak.crunchyroll.com/i/spire1-tmb/ab5a9b7b1061cea4e6e24ae04a93a6c71582556451_wide.jpg"
   *        },
   *        {
   *          "epsId": "es/227-nanabun-no-nijyuuni/episode-2-amid-the-dizziness-793659",
   *          "title": "Episodio 2",
   *          "description": "Entre el vértigo",
   *          "previewImage": "https://img1.ak.crunchyroll.com/i/spire2-tmb/7c4d3ef8635f95d47784dbd986a86e481581940069_wide.jpg"
   *        },
   *        {
   *          "epsId": "es/227-nanabun-no-nijyuuni/episode-1-goodbye-small-world-793658",
   *          "title": "Episodio 1",
   *          "description": "Adiós a mi pequeño mundo",
   *          "previewImage": "https://img1.ak.crunchyroll.com/i/spire3-tmb/216f7f5f15ccaf22e70fb00ccc44c72e1581341267_wide.jpg"
   *        }
   *      ]
   *    }, 
   *    //.....
   *   ]
   * }
   * 
   * 
   */

  @Get('/AnimeListBySeasons/:season/:page')
  @Bind(Res() , Param('season') , Param('page'))
  async getAnimeListBySeason(res , season , page){
    const data = await this.service.getAnimeListBySeason(season , page);
    return res.status(200).json({
      data: data[0]
    });
  };


  /**
   *  @api {get} /SearchAnime/:query Searcha anime
   *  @apiVersion 1.0.0
   *  @apiName GetSearchAnime
   *  @apiGroup SearchAnime
   * 
   *  @apiSuccess {String} id                      Anime id
   *  @apiSuccess {String} title                   Anime title
   *  @apiSuccess {String} image                   Anime image
   *  @apiSuccess {String} description             Brief description
   *  @apiSuccess {Object[]} episodes              List of episodes
   *  @apiSuccess {String} episodes.epsId          Anime episode id
   *  @apiSuccess {String} episodes.title          Anime episode title
   *  @apiSuccess {String} episodes.description    Anime episode description
   *  @apiSuccess {String} episodes.previewImage   Anime episode preview image
   *  @apiSuccess {String[]} promo                List of promo
   *  @apiSuccess {String} promo.title            Promo title
   *  @apiSuccess {String} promo.previewImage     Preview image  
   *  @apiSuccess {String} promo.videoURL         Promotional video from youtube.
   *  @apiSuccess {Object[]} extra               Extra Information
   *  @apiSuccess {String} extra.titleJapanese   Alternative title in Japanese
   *  @apiSuccess {String} extra.source          anime source
   *  @apiSuccess {Number} extra.totalEpisodes   Total anime episodes
   *  @apiSuccess {String} extra.status          Current Transmission Status
   *  @apiSuccess {String[]} extra.aired         Start and end date of the anime
   *  @apiSuccess {Number} extra.duration        Average duration by episodes
   *  @apiSuccess {Number} extra.rank            Actual ranking position
   *  @apiSuccess {Number} extra.popularity      Popularity value
   *  @apiSuccess {Number} extra.members         Number of Members who support the anime
   *  @apiSuccess {String} extra.premiered       Release date
   *  @apiSuccess {String} extra.broadcast       Broadcast day
   *  @apiSuccess {String[]} extra.producers     Anime Propuctures
   *  @apiSuccess {String[]} extra.licensors     Anime licensors
   *  @apiSuccess {String[]} extra.studios       Anime studios
   *  @apiSuccess {String[]} extra.openingThemes title of the beginning anime song 
   *  @apiSuccess {String[]} extra.endingThemes  song title at the end of the anime
   *  @apiSuccess {String[]} extra.promoList     List of promotional videos
   *  @apiSuccess {String[]} extra.charactersList characters List
   * 
   * 
   *  @apiParam {String} query
   *  
   * 
   *  @apiParamExample {json} 
   *  {
   *    query = "one punch man"
   *  }
   * 
   *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * 
   *    {
   *     "data": [
   *       {
   *         "id": "es/one-punch-man",
   *         "title": "One-Punch Man",
   *         "image": "https://img1.ak.crunchyroll.com/i/spire3/bc2dbd3afc97b5f1a1ad49e1d5618a431554828663_thumb.jpg",
   *         "description": "Saitama comenzó a hacer de héroe por pura afición, y tras tres años de un durísimo entrenamiento consiguió tal nivel de fuerza que puede acabar con...",
   *         "type": "Series",
   *         "episodes": [
   *           {
   *             "epsId": "es/one-punch-man/episode-12-the-strongest-hero-786398",
   *             "title": "Episodio 12",
   *             "description": "El mayor héroe",
   *             "previewImage": "https://img1.ak.crunchyroll.com/i/spire2-tmb/682ceb64923048680e5d827539995a821558482389_wide.jpg"
   *           },
   *           //.....
   *         ]
   *       },
   *       //.....
   *    }
   * 
   * 
   */

  @Get('/SearchAnime/:query')
  @Bind(Res() , Param('query'))
  async searchAnime(res , query){
    const data = await this.service.searchAnime(query)
    return res.status(200).json({
      data: data[0]
    });
  };

}