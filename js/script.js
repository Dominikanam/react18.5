var contacts = [
	{
	  id: 1,
	  firstName: 'Jan',
	  lastName: 'Nowak',
	  email: 'jan.nowak@example.com',
	},
	{
	  id: 2,
	  firstName: 'Adam',
	  lastName: 'Kowalski',
	  email: 'adam.kowalski@example.com',
	},
	{
	  id: 3,
	  firstName: 'Zbigniew',
	  lastName: 'Koziol',
	  email: 'zbigniew.koziol@example.com',
	}
  ];

  var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
  };

  var App = React.createClass({
	render: function() {
	  return (
		React.createElement('div', {className: 'app'},
		  React.createElement(ContactForm, {contact: contactForm}),
		  React.createElement(Contacts, {items: contacts}, {})
		)
	  );
	}
  });

  var ContactForm = React.createClass({
	propTypes: {
	  contact: React.PropTypes.object.isRequired
	},

	render: function() {
	  return (
		React.createElement('form', {className: 'contactForm'},
		  React.createElement('input', {
			type: 'text',
			placeholder: 'Imię',
			value: this.props.contact.firstName,
		  }),
		  React.createElement('input', {
			type: 'text',
			placeholder: 'Nazwisko',
			value: this.props.contact.lastName,
		  }),
		  React.createElement('input', {
			type: 'email',
			placeholder: 'Email',
			value: this.props.contact.email,
		  }),
		  React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
		)
	  )
	},
  })

  var Contacts = React.createClass({
	propTypes: {
	  items: React.PropTypes.array.isRequired,
	},

	render: function() {
	  var contacts = this.props.items.map(function(contact) {
		  return React.createElement(Contact, {item: contact, key: contact.id});
	  });

	  return (
		React.createElement('ul', {className: 'contactsList'}, contacts)
	  );
	}
  });

  var Contact = React.createClass({
	propTypes: {
	  item: React.PropTypes.object.isRequired,
	},

	render: function() {
	  return (
		React.createElement('div', {className: 'contactItem'},
		  React.createElement('img', {
			className: 'contactImage',
			src: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png'
		  }),
		  React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
		  React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
		  React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
			this.props.item.email
		  )
		)
	  )
	},
  });

  var app = React.createElement(App);
  ReactDOM.render(app, document.getElementById('app'));

