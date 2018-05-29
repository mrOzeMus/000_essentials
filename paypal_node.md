# Paypal Rest api pour Node


## prerequis

On va utiliser paypal-rest-sdk la documentation n'est pas tres bien faite revoir si besoin le tuto de traversymedia si besoin.

installation:

	npm i express ejs paypal-rest-sdk
	
Avant aller sur son compte paypal et creer une app, ce qui permet d'avoir ensuite un client id et un client secret on va en avoir besoin.

architecture projet:
--|-views-index.ejs
  |-appp.js
  

Note: pour faire les tests on peut creer des comptes paypals fictifs sur sandbox.paypal. Creer un compte personnel et un compte business.

## Fichiers

index.ejs:

	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	  <title>Document</title>
	</head>
	<body>

	  <h1>Mode Paypal test</h1>
	  <h2>Buy for 28$</h2>
	  <form action="/pay" method="post">
		<input type="submit" value="Buy">
	  </form>
	</body>
	</html>
	
app.js:

	//quand le payment est accepte on va etre redirige vers cette addresse avec pleins d'infos en parametres dans l'url
	app.get('/success', (req, res)=>{
	  //recuperactin payment id et payer Id , on va en avoir besoin
	  const payerId = req.query.PayerID
	  const paymentId = req.query.paymentId
	  console.log(payerId,paymentId)
	  const execute_payment_json = {
		"payer_id": payerId,
		"transactions": [{
		  "amount": {
			"currency": "USD",
			"total": "25.00"
		  }
		}]
	  }

	  paypal.payment.execute(paymentId, execute_payment_json, function(error,payment){
		//payment final
		if(error){
		  console.log(error.response)
		  throw error 
		}else{
		  console.log('get payment response')
		  console.log(JSON.stringify(payment))
		  res.send('Success')
		}
	  })


	})

	app.get('/cancel', (req,res)=> res.send('transaction cancelled'))

	app.listen(3000, ()=> console.log('server listening '))

	