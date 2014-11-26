var db = null;
angular.module('yoga.services', ['ngCordova'])

/**
 * A simple example service that returns some data.
 *
 */
.factory('YogaService', function($cordovaSQLite) {
  //Handling db related activities
  function initializeDB() {
    db = $cordovaSQLite.openDB({ name: "my.db" });
    $cordovaSQLite.execute(db, "DROP TABLE YOGA_ACTIVITY");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS YOGA_ACTIVITY (id integer, userid text, day text, yogacategory integer, seconds integer )");
  }

  // Might use a resource here that returns a JSON array
  var yogadata = [
    { id: 1, title: 'Popular', URL: 'img/th9.jpg', parentId: 0, content: 'Popular Yoga exercises with most benefits' },
    { id: 2, title: 'Pranayam', URL: 'img/pra1.jpg', parentId: 0, content: 'Pranayama, or deep yogic breathing, is a life and energy-giving source that can cure almost every physical ailment.' },
    { id: 3, title: 'Asanas', URL: 'img/asa1.jpg', parentId: 0, content: 'Yoga asanas is a wonderful way to encourage them to a healthy lifestyle.' },
    { id: 4, title: 'Relaxation', URL: 'img/rel1.jpg', parentId: 0, content: 'Relaxation exercises' },
    // Pranayama
    { id: 30, title: 'Bhastrika', URL: 'img/th3.jpg', parentId: 2, content: 'Bhastrika'  },
    { id: 31, title: 'Anuloma Viloma', URL: 'img/th8.jpg', parentId: 2, content: 'Anuloma Viloma' },
    { id: 32, title: 'Kapalabhati', URL: 'img/th2.jpg', parentId: 2, content: 'Kapalabhati' },
    { id: 33, title: 'Bhramari', URL: 'img/th3.jpg', parentId: 2, content: 'Bhramari' },
    { id: 34, title: 'Ujjayee', URL: 'img/th5.jpg', parentId: 2, content: 'Ujjayee' },
    // Popular
    { id: 60, title: 'SuryaNamaskar', URL: 'img/sur1.jpg', parentId: 1, content: 'Sun salutation', sound: 'sounds/two.mp3', noguidesound: 'sounds/suryanamaskar_unguided.mp3'},
    // Asanas
    { id: 90, title: 'Sarvangasana', URL: 'img/th3.jpg', parentId: 3, content: 'Sarvangasana', sound: 'sounds/two.mp3' },
    { id: 91, title: 'Dhanurasana', URL: 'img/th8.jpg', parentId: 3, content: 'Dhanurasana', sound: 'sounds/two.mp3' },
    { id: 92, title: 'Chakrasana', URL: 'img/th2.jpg', parentId: 3, content: 'Chakrasana', sound: 'sounds/two.mp3' },
    { id: 93, title: 'Virbhadrasana', URL: 'img/th3.jpg', parentId: 3, content: 'Virbhadrasana', sound: 'sounds/two.mp3' },
    { id: 94, title: 'Sethu bandhasana', URL: 'img/th5.jpg', parentId: 3, content: 'Sethu bandhasana', sound: 'sounds/two.mp3' },
    // Relaxation
    { id: 120, title: 'Shavasana', URL: 'img/th10.jpg', parentId: 4, content: 'Shavasana'  }
  ];
  
  //TODO: For the time being, as we have empty DB.
  function insertActivitiesIntoDB() {
    var query = "INSERT INTO YOGA_ACTIVITY (id, userid, day, yogacategory, seconds) VALUES (?,?,?, ?, ?)";

    //Insert first record.
    $cordovaSQLite.execute(db, query, [0, "Ramdev1", "1/1/2014", 2, 900]).then(function(res) {
        console.log("INSERTED ID 1 -> " + res.insertId);
    }, function (err) {
        console.error(err);
    });
    //Second record.
    $cordovaSQLite.execute(db, query, [0, "Ramdev1", "1/1/2014", 3, 900]).then(function(res) {
        console.log("INSERTED ID 2 -> " + res.insertId);
    }, function (err) {
        console.error(err);
    });
    //Third record
    $cordovaSQLite.execute(db, query, [0, "Ramdev1", "1/1/2014", 4, 900]).then(function(res) {
        console.log("INSERTED ID 3 -> " + res.insertId);
    }, function (err) {
        console.error(err);
    });


    //Insert first record.
    $cordovaSQLite.execute(db, query, [1, "Ramdev1", "1/2/2014", 2, 1000]).then(function(res) {
        console.log("INSERTED ID 1 -> " + res.insertId);
    }, function (err) {
        console.error(err);
    });
    //Second record.
    $cordovaSQLite.execute(db, query, [1, "Ramdev1", "1/2/2014", 3, 500]).then(function(res) {
        console.log("INSERTED ID 2 -> " + res.insertId);
    }, function (err) {
        console.error(err);
    });
    //Third record
    $cordovaSQLite.execute(db, query, [1, "Ramdev1", "1/2/2014", 4, 200]).then(function(res) {
        console.log("INSERTED ID 3 -> " + res.insertId);
    }, function (err) {
        console.error(err);
    });
  }
 /* Returns all the activities from database. */
 function fetchAllActivitiesFromDB() {
  initializeDB();
  insertActivitiesIntoDB();
  var activities = [];
  //Start writing select.
  var query = "SELECT distinct day FROM YOGA_ACTIVITY";
        $cordovaSQLite.execute(db, query).then(function(res) {
             //TODO: Dirty for-loop need to use underscore utility for this.
             for(count = 0; count < res.rows.length; ++count) {
               var tableRow = [];
               tableRow.id = count;
               tableRow.day = res.rows.item(count).day;
               activities.push(tableRow);
            }
        }, function (err) {
            console.error(err);
        });
  
  return activities;
  }

  function fetchActivityByDay(id) {
    var activities = [];
    //Start writing select.
    var query = "SELECT  seconds FROM YOGA_ACTIVITY where id = '"+id+"'";
          $cordovaSQLite.execute(db, query).then(function(res) {
           
              
               for(count = 0; count < res.rows.length; ++count) {
                 var tableRow = [];
                  //TODO: Need to fetch yogadata from table only.
                tableRow.yogaType = yogadata[count+1].title;
                 tableRow.time = Math.round((res.rows.item(count).seconds) / 60);
                activities.push(tableRow);
                 
              }
          }, function (err) {
              console.error(err);
          });
   

    return activities;
  }
  // TODO: Change these funtions to async instead.
  return {
    allCategories: function() {
      var results = yogadata.filter(function (element) {
        return element.parentId == 0;
      });
      return results;
    },
    
    getItem: function(index) {
      var results = yogadata.filter(function (element) {
        return element.id == index;
      });
      return results[0];
    },
    
    allActivites: function() {
      return fetchAllActivitiesFromDB();
    },

    detailActivites: function(id) {
       //day = "1/1/2014";
       return fetchActivityByDay(id);
    },
    
    getCategoryItems: function(parentId) {
      var results = yogadata.filter(function (element) {
        return element.parentId == parentId;
      });
      return results;
    }
        
  }
});
