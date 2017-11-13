import React from 'react';
import './InfoAndHistory.css';

class InfoAndHistory extends React.Component {
  render (){
    return (
      <div className='container'>
        <h1>Humble beginings on Earth, SOL System</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas turpis nec porttitor sollicitudin. Etiam tincidunt diam augue, pharetra laoreet enim sagittis in. Etiam dui arcu, euismod non porta a, sagittis nec tortor. Suspendisse orci turpis, pharetra nec justo bibendum, finibus blandit lorem. Fusce rhoncus at justo ut volutpat. Donec porttitor ultricies nisl, sed imperdiet velit fringilla et. Donec iaculis porta aliquam. Nam in malesuada nisi. </p>
        <p className='history-description'>Ut mauris ipsum, congue eget elementum vitae, aliquet ac felis. Pellentesque tempus eros ac urna scelerisque consectetur. Pellentesque eu fermentum dolor, eget efficitur mi. Suspendisse eget enim sed lectus eleifend tincidunt. Quisque vel quam lacinia nisi mollis malesuada sed sed leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sodales massa lorem, at rutrum ipsum consequat ut. Cras ex justo, feugiat a est vel, sodales ullamcorper odio. Nullam quis arcu varius, rhoncus diam a, porttitor nisi. </p>
        <img src ="./img/history/e2ddf009ca9fda12c45a2d94fb1e1f15.jpg"  alt='floating gas station'/>
        <h1>First ventures into space</h1>
        <p>Phasellus lacus ex, congue sed leo vitae, feugiat laoreet justo. Sed vulputate maximus semper. Quisque ut tortor nisl. Aliquam ac pretium odio. Fusce porttitor lorem ipsum, eu commodo mi fringilla id. Vestibulum sit amet elit libero. Vivamus et elementum felis. Phasellus iaculis tristique sem sed varius. Sed vitae enim eu est auctor dignissim. Cras consectetur tortor et metus placerat sodales. Duis pharetra sem vel porttitor imperdiet.</p>
        <img src ="./img/history/SteampunkDeathstar.jpg"  alt='DEATH STAR'/>
        <h1>Where we are now</h1>
        <p>Pellentesque vel nisl consectetur, aliquam neque aliquet, porta justo. Curabitur id magna mollis, vehicula augue vitae, feugiat nisl. Quisque interdum, elit id ultrices vulputate, dolor dolor efficitur est, ac dignissim augue urna vel justo. Praesent at lectus in orci mattis volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue eros risus, ut tincidunt massa mattis et. Vestibulum non cursus tellus. Morbi pharetra et ipsum ut iaculis. Proin elementum in dui at faucibus. Donec nisl sapien, euismod id tempor ac, convallis ut felis. Phasellus maximus dapibus mauris, ut congue ipsum iaculis ut. Proin placerat tincidunt augue vel ultrices. Praesent faucibus quam eros, a consequat magna ornare ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia libero elit, ac placerat dolor tincidunt at. Sed interdum, mi cursus varius condimentum, nunc nibh placerat arcu, at euismod erat ante et ante.</p>
        <img src ="./img/history/Resturant.jpg"  alt='Current look'/>
        <h1>Our bar</h1>
        <img src ="./img/history/starwarscantina.0.0.jpg"  alt='Our bar'/>
        <p>Our Galactic famous bar is styled after the most wretched hive of scum and villainy, Mos Eisley.</p>
        <p>Our bar staff can offer a variety of liquors not availble, not legal, anywhere else.</p>
        <div>
        <h1>Our suppliers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas turpis nec porttitor sollicitudin. Etiam tincidunt diam augue, pharetra laoreet enim sagittis in. Etiam dui arcu, euismod non porta a, sagittis nec tortor. Suspendisse orci turpis, pharetra nec justo bibendum, finibus blandit lorem.</p>
          <ul>
            <li>Mark Whatney</li>
            <li>Han Solo</li>
            <li>Quark</li>
            <li>Nigerian gangs</li>
          </ul>
        </div>


      </div>

    )
  }
}

export default InfoAndHistory;
