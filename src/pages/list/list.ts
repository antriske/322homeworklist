import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  homeworks = [
      {item: "do todd's homework"},
      {item: "creative concepts paper"},
      {item: "study astronomy"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  addThing() {
    let prompt = this.alertCtrl.create({
        title: "Add More Bullshit To Your Already Growing List",
          inputs: [
              {name: "item"}
          ],

          buttons: [
              {
                text: "Cancel"
              },
              {
                text: "Add Item",
                  handler:data => {
                    console.log(data);
                    this.homeworks.push(data);
                  }
              },
       ]
    });

      prompt.present();
  }
  deleteThing(homeworkThing){
    let index = this.homeworks.indexOf(homeworkThing);

    this.homeworks.splice(index,1)
  }

  editThing(homeworkThing){
    let prompt = this.alertCtrl.create({
        title: "Edit Item",
        inputs: [
            {name: "item",
             placeholder: homeworkThing.item}
        ],

        buttons: [
            {
              text: "Cancel"
            },
            {
              text: "Save Item",
              handler:data => {
                let index = this.homeworks.indexOf(homeworkThing);
                if(index > -1){
                  this.homeworks[index] = data;
                }
              }
            },
        ]
    });

    prompt.present();
  }
}
