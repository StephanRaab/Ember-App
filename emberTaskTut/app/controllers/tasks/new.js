import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function() {
            var title = this.get('title');
            var date = this.get('date');
            var description = this.get('description');

            //Create new task
            var newTask = this.store.createRecord('task', {
                title: title,
                description: description,
                date: new Date(date)
            });

            //Save to Firebase
            newTask.save();

            //Clear form
            this.setProperties({
                title: '',
                description: '',
                date: ''
            });
        }
    }
});
