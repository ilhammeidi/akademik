 $(document).ready(function () {
     // Create the chart
     $('#bar_container').highcharts({
         chart: {
             type: 'column',
             height: 360,
             width: 1080
         },
         title: {
             text: 'Statistk Pustaka Favorit'
         },
         xAxis: {
             type: 'category'
         },
         yAxis: {
             title: {
                 text: 'Jumlah Dipinjam'
             }

         },
         legend: {
             enabled: false
         },
         plotOptions: {
             series: {
                 borderWidth: 0,
                 dataLabels: {
                     enabled: true,
                     format: '{point.y:.1f}%'
                 }
             }
         },

         tooltip: {
             headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
             pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
         },

         series: [{
             name: 'Pustaka',
             colorByPoint: true,
             data: [{
                     name: 'Matematika',
                     y: 4,
                     color: 'rgb(191, 94, 35)',
                        }, {
                     name: 'Komputer',
                     y: 2,
                     color: 'rgb(134, 167, 12)',
                        }, {
                     name: 'Astronomi',
                     y: 4,
                     color: 'rgb(12, 159, 167)',
                        },
                 {
                     name: 'Fisika',
                     y: 5,
                     color: 'rgb(110, 131, 212)',
                        }, {
                     name: 'B.Indonesia',
                     y: 5,
                     color: 'rgb(217, 97, 153)',
                        }]
                    }],
     });

     //Tree Table
     $("#tree_table").treetable({
         expandable: true,
         clickableNodeNames: true
     });
     $("#tree_table").treetable('expandAll');
     $('#tree_expand').click(function () {
         $("#tree_table").treetable('expandAll');
     });
     $('#tree_collapse').click(function () {
         $("#tree_table").treetable('collapseAll');
     });

     //WSWYG Editor
     $('#edit_desc').froalaEditor({
         enter: $.FroalaEditor.ENTER_P,
         height: 350,
         toolbarBottom: true,
         colorsBackground: [
                    '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
                    '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
                ],
         colorsDefaultTab: 'background',
         colorsStep: 6,
         colorsText: [
                    '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
                    '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
                ]
     });

     //Parallax Script
     $('a.link').click(function () {
         $('.parallax-content').scrollTo($(this).attr('href'), 1500, {
             specialEasing: {
                 width: "easeOutCubic",
                 height: "easeOutCubic"
             }
         });
         setPosition($(this).attr('href'), '#prx0', '0px', '375px', '750px', '1125px', '1500px', '1875px', '2250px', '2625px', '3000px')
         setPosition($(this).attr('href'), '#prx1', '0px', '500px', '1000px', '1500px', '2000px', '2500px', '3000px', '3500px', '4000px')
         setPosition($(this).attr('href'), '#prx2', '0px', '625px', '1300px', '1875px', '2500px', '3125px', '3750px', '4375px', '5000px')
         setPosition($(this).attr('href'), '#prx3', '0px', '750px', '1500px', '2250px', '3000px', '3750px', '4500px', '5250px', '6000px')
         $('a.link').removeClass('cur');
         $(this).addClass('cur');
         return false;
     });
 });

 function setPosition(check, div, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
     switch (check) {
         case '#box1':
             $(div).scrollTo(p1, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box2':
             $(div).scrollTo(p2, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box3':
             $(div).scrollTo(p3, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box4':
             $(div).scrollTo(p4, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box5':
             $(div).scrollTo(p5, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box6':
             $(div).scrollTo(p6, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box7':
             $(div).scrollTo(p7, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
         case '#box8':
             $(div).scrollTo(p8, 1500, {
                 specialEasing: {
                     width: "easeOutCubic",
                     height: "easeOutCubic"
                 },
             });
             break;
     }
 };