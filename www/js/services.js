angular.module('yoga.services', [])

/**
 * A simple example service that returns some data.
 *
 */
.factory('YogaService', function() {
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
    { id: 60, title: 'SuryaNamaskar', URL: 'img/sur1.jpg', parentId: 1, content: 'Sun salutation', sound: 'sounds/suryanamaskar.mp3'},
    // Asanas
    { id: 90, title: 'Sarvangasana', URL: 'img/th3.jpg', parentId: 3, content: 'Sarvangasana', sound: 'sounds/two.mp3' },
    { id: 91, title: 'Dhanurasana', URL: 'img/th8.jpg', parentId: 3, content: 'Dhanurasana', sound: 'sounds/two.mp3' },
    { id: 92, title: 'Chakrasana', URL: 'img/th2.jpg', parentId: 3, content: 'Chakrasana', sound: 'sounds/two.mp3' },
    { id: 93, title: 'Virbhadrasana', URL: 'img/th3.jpg', parentId: 3, content: 'Virbhadrasana', sound: 'sounds/two.mp3' },
    { id: 94, title: 'Sethu bandhasana', URL: 'img/th5.jpg', parentId: 3, content: 'Sethu bandhasana', sound: 'sounds/two.mp3' },
    // Relaxation
    { id: 120, title: 'Shavasana', URL: 'img/th10.jpg', parentId: 4, content: 'Shavasana'  }
  ];
  
  var activities = [
    { id: 0, desc: 'Did 10 min Pranayam yesterday' },
    { id: 1, desc: 'Did 20 min Asanas yesterday' },
    { id: 2, desc: 'Did 10 min Pranayam on Mon 11/3' },
    { id: 3, desc: 'Did 10 min Pranayam on Sun 11/2' }
  ];
  
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
      return activities;
    },
    
    getCategoryItems: function(parentId) {
      var results = yogadata.filter(function (element) {
        return element.parentId == parentId;
      });
      return results;
    }
        
  }
});
