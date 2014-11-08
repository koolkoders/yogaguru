angular.module('yoga.services', [])

/**
 * A simple example service that returns some data.
 * Links
   http://www.indiaparenting.com/alternative-healing/12_755/3-quick-yoga-aasans.html
   
   Icons: http://www.flaticon.com/free-icon/frontal-meditation-yoga-posture-silhouette_10540
 */
.factory('Yoga', function() {
  // Might use a resource here that returns a JSON array
  var categories = [
    { id: 0, title: 'Popular', URL: 'img/th9.jpg', content: 'Popular Yoga exercises with most benefits' },
    { id: 1, title: 'Pranayam', URL: 'img/pra1.jpg', content: 'Pranayama, or deep yogic breathing, is a life and energy-giving source that can cure almost every physical ailment.' },
    { id: 2, title: 'Asanas', URL: 'img/asa1.jpg', content: 'Yoga asanas is a wonderful way to encourage them to a healthy lifestyle.' },
    { id: 3, title: 'Relaxation', URL: 'img/rel1.jpg', content: 'Relaxation exercises' }
  ];

  var pranayams = [
    { id: 0, title: 'Bhastrika', URL: 'img/th3.jpg', content: 'blah blah'  },
    { id: 1, title: 'Anuloma Viloma', URL: 'img/th8.jpg', content: 'blah blah' },
    { id: 2, title: 'Kapalabhati', URL: 'img/th2.jpg', content: 'blah blah' },
    { id: 3, title: 'Bhramari', URL: 'img/th3.jpg', content: 'blah blah' },
    { id: 4, title: 'Ujjayee', URL: 'img/th5.jpg', content: 'blah blah' }    
  ];

  var popular = [
    { id: 0, title: 'SuryaNamaskar', URL: 'img/sur1.jpg', content: 'Sun salutation in 12 steps'  }  
  ];

  var relaxation = [
    { id: 0, title: 'Shavasana', URL: 'img/th10.jpg', content: 'blah blah'  }  
  ];

  var asanas = [
    { id: 0, title: 'Sarvangasana', URL: 'img/th3.jpg', content: 'blah blah'  },
    { id: 1, title: 'Dhanurasana', URL: 'img/th8.jpg', content: 'blah blah' },
    { id: 2, title: 'Chakrasana', URL: 'img/th2.jpg', content: 'blah blah' },
    { id: 3, title: 'Virbhadrasana', URL: 'img/th3.jpg', content: 'blah blah' },
    { id: 4, title: 'Sethu bandhasana', URL: 'img/th5.jpg', content: 'blah blah' }    
  ];
  
  var activities = [
    { id: 0, desc: 'Did 10 min Pranayam yesterday' },
    { id: 1, desc: 'Did 20 min Asanas yesterday' },
    { id: 2, desc: 'Did 10 min Pranayam on Mon 11/3' },
    { id: 3, desc: 'Did 10 min Pranayam on Sun 11/2' }
  ];
  
  return {
    allCategories: function() {
      return categories;
    },
    get: function(yogaId) {
      // Simple index lookup
      return categories[yogaId];
    },
    allActivites: function() {
      return activities;
    },
    getItems: function(yogaId) {
      if (yogaId == 0) {
        return popular; 
      } else if (yogaId == 1) {
        return pranayams; 
      } else if (yogaId == 2) {
        return asanas; 
      } else if (yogaId == 3) {
        return relaxation; 
      } 
    },
  }
});
