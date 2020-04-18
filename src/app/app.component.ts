import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myOSApp';
  menuData = [
    {
      title: 'Home', url: '', child: [{
        title: 'More', url: '', child: [
          { title: 'careers', url: '', child: [] },
          { title: 'About Us', url: '', child: [{ title: 'AB', url: '', child: [] }] },
          {
            title: 'Locate Us', url: '', child: [{ title: 'careers', url: '', child: [] },
            { title: 'About Us', url: '', child: [{ title: 'AB', url: '', child: [] }] },
            { title: 'Locate Us', url: '', child: [] }]
          }
        ]
      }]
    },
    { title: 'Contact Us', url: '', child: [] },
    {
      title: 'More', url: '', child: [
        { title: 'careers', url: '', child: [] },
        { title: 'About Us', url: '', child: [{ title: 'AB', url: '', child: [] }] },
        {
          title: 'Locate Us', url: '', child: [{ title: 'careers', url: '', child: [] },
          { title: 'About Us', url: '', child: [{ title: 'AB', url: '', child: [] }] },
          { title: 'Locate Us', url: '', child: [] }]
        }
      ]
    }
  ];
}
