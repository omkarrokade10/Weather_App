import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://in.images.search.yahoo.com/images/view;_ylt=AwrKAQqGGtBmDxsKJk.9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2ViY2E0MDg0NWZkNzZjM2U3OTJiNWVhNzkzZDJhZTExBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Ddust%2Bcity%2Bimg%26type%3DE211IN714G91791%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1000&h=626&imgurl=img.fotocommunity.com%2Fcity-in-dust-6b85db3b-6687-4e04-a07f-26107372ca4a.jpg%3Fwidth%3D1000&rurl=https%3A%2F%2Fwww.fotocommunity.de%2Fphoto%2Fcity-in-dust-marcus-rueter%2F6523996&size=190.6KB&p=dust+city+img&oid=ebca40845fd76c3e792b5ea793d2ae11&fr2=piv-web&fr=mcafee&tt=city+in+dust+Foto+%26+Bild+%7C+north+america%2C+united+states%2C+california+...&b=0&ni=21&no=1&ts=&tab=organic&sigr=NxHtV6B4is0u&sigb=cugoQrfVyJBd&sigi=ge8.mI2Xg7A_&sigt=Zw_wamiUKs2D&.crumb=BGB0/J55.n0&fr=mcafee&fr2=piv-web&type=E211IN714G91791";

    const COLD_URL="https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1545073334-9cb53498f1dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1667981663831-c395f9505e1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaW4lMjBjaXR5fGVufDB8fDB8fHww";

    return(
      <div className="InfoBox"> 
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          : info.temp>15
          ? HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
          {info.humidity>80?(
            <ThunderstormIcon/>
          ): info.temp>15?(
            <WbSunnyIcon/>
          ):(
            <AcUnitIcon/>
          )}
        </Typography>
        <Typography variant="body2" color= "text.secondary"component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temp={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}