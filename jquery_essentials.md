# JQUERY ESSENTIALS

## 1. Intro & Selectors

Attente du chargement du fichier:

	$(document).ready(function(){
	...
	})

Méthodes:

	$('h1').hide();
	$('h1#heading1').hide();
	$('p span').css('color', 'red');

	//couleur des liens hypertext
	$('[href]').css('color','red');


Intégration des listes:

	$('ul#list li:first').css('color','red');
	$('ul#list li:last').css('color', 'blue');
	$('ul#list li:even').css('background-color','#cccccc');
	$('ul#list li:odd').css('background-color','#cccccc');

## 2. Events

	$('#btn1').click(function(){
		alert('button clicked')
	});

	$('#btn1').on('click', function(e){
		alert('button clicked');
		console.log(e);
	});

Similar events:
* dblclick
* hover
* mouseenter
* mouseleave
* mousemove
* mousedown
* mouseup
* keyup
* change
* submit


	$('input').focus(function(){
		alert('Focus');
	});

	$('input').blur(function(){
		$(this).css('background', 'white')
	});


## 3. DOM Manipulation

Ajout de classe:

	$('p.para2').addClass('myClass');
	$('p.para2').removeClass('myClass');

	$('#btn1').click(function(){
		$('p.para2').toggleClass('myClass')
	});

	$('#myDiv').html('<h3>Hello world</h3>');

	$('ul').append('<li>Append list Item</li>');
	$('ul').prepend('<li>Append list Item</li>');

	$('a').attr('target','_blank');
	$('a').removeAttr('target');

## 4. Effects and animation

Gestion des _fades_:

	$('#box').fadeOut(3000, function(){
		...
	})
	$('#box').fadeIn(3000);
	$('#box').fadeToggle(1000);

Autres effets d'anim:
* slideUp
* slideDown
* stop
* animate


## 5. Ajax requests

*exemple d'utilisation:*

	$(document).ready(function(){
		$('#result').load('test.html', function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success"){
				alert('It went fine');
			}else if(statusTxt == "error"){
				alert('error: ' + xhr.statusText)
			}
			})
		});

	$.get('test.html', function(data){
		$('#result').html(data);
	});

	$.getJSON('users.json', function(data){
		$.each(data, function(i, users){
			$('ul#users').append('<li>'+user.firstName+'</li>');
		});
	});

	$.ajax({
		method:'GET',
		url: 'https://jsonplaceholder.typicode.com/posts',
		dataType: 'json'
		}).done(function(data){
			console.log(data);
			$.map(data, function(post, i){
				$('#resurt').append(.....)
			})
	});


>Post request:

	$('#postForm').submit(function(e){
		e.preventDefault();

		let title = $('#title').val();
		let body = $('#body').val();
		let url = $(this).attr('action');

		$.post(url, {title:title, body:body}).done(function(data){
			console.log('Post saved');
			console.log(data);
			})
		})
