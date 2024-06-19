const express=require('express');
const app=express();

const PORT=process.env.PORT || 81;

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('SERVEUR DE TRAITEMENT DE REQUETE EST ACTIF');
});

app.post('/api/data',(req,res)=>{
  const data=req.body;
  console.log('Données reçu:',data);
  // console.log(res,req);
  res.status(200).json({message:'Données reçues avec succès!'});
})


app.listen(PORT,()=>{
  console.log(`SERVEUR DEMARRE SUR LE PORT ${PORT}`);
});