import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
  public data : any = [
    {
      p_id : '1',
      product_name : 'Folder set(6+1)',
      product_weight : '',
      product_price : '850',
      product_image : 'https://4.imimg.com/data4/RS/OU/MY-10384256/files-folder-500x500.jpg'
    },
    {
      p_id : '2',
      product_name : 'Notepads (set of 4)',
      product_weight : '200ml',
      product_price : '250',
      product_image : 'https://ae01.alicdn.com/kf/Hab91e8995f6d4f588c84bd9b7d3e81aah/Retro-Spiral-Coil-Sketchbook-Kraft-Paper-Notebook-Sketch-Painting-Diary-Journal-Student-Note-Pad-Book-Memo.jpg_Q90.jpg_.webp'
    },
    {
      p_id : '3',
      product_name : 'Sticky Notes',
      product_weight : '200ml',
      product_price : '120',
      product_image : 'https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/6f37cc4e-2f91-4c5b-8dbd-78c933226641?max=250&quality=80&_mzcb=_1618890579000'
    },
    {
      p_id : '4',
      product_name : 'Flash Drive',
      product_weight : '200g',
      product_price : '1765',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUOLlA1V-TdXIlFriHDxGkUJmmujvqvgKzQ&usqp=CAU'
    },
    {
      p_id : '5',
      product_name : 'Desk Organizer',
      product_weight : '1Kg',
      product_price : '310',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SPneYvXfoQhAiFp5IanTiOSWDqReuJDpig&usqp=CAU'
    },
    {
      p_id : '6',
      product_name : 'Fax Machine',
      product_weight : '200ml',
      product_price : '7650',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJWeGRWOJg74RJX_N18MaxJoPApJkqLpdtg&usqp=CAU'
    },
    {
      p_id : '7',
      product_name : 'Stapler',
      product_weight : '200ml',
      product_price : '75',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV5aPail-M580rJdjVhzDwfVgnMHYLBklNg&usqp=CAU'
    },
    {
      p_id : '8',
      product_name : 'A4 Sheet bundle',
      product_weight : '250ml',
      product_price : '235',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nQr5lW9LOI6qtiqPbNa1wDAddTwLeuuvvQ&usqp=CAU'
    },
    {
      p_id : '9',
      product_name : 'ID card holder',
      product_weight : '250ml',
      product_price : '185',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Kb7IwlARXTXrDNGmn1dPiaQd04oZa2CrLg&usqp=CAU'
    },
    {
      p_id : '10',
      product_name : 'Scotch Tape',
      product_weight : '250ml',
      product_price : '115',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJO_vfLjDb9c0-AHE892aQzQjKEJEHoGHNTw&usqp=CAU'
    },
    {
      p_id : '11',
      product_name : 'Binder Clip',
      product_weight : '250ml',
      product_price : '60',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPnDbkWOkxNstp4jIOHbdAUvariHNtS1sNg&usqp=CAU'
    },
    {
      p_id : '12',
      product_name : 'Notice Board Pins',
      product_weight : '250ml',
      product_price : '40',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKBlJekfbugMOsfLSsEPYLBLq272pk_FDIg&usqp=CAU'
    },
    {
      p_id : '13',
      product_name : 'Filing Cabinet',
      product_weight : '250ml',
      product_price : '15999',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-iha53dpbV5NIyUu4U9eFvN9-gOnTNu-0Q&usqp=CAU'
    },
    {
      p_id : '14',
      product_name : 'Highlight Pen',
      product_weight : '250ml',
      product_price : '20',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7hOecg6oTcZF6av04PbJ71toZu-x8q0NQA&usqp=CAU'
    },
    {
      p_id : '15',
      product_name : 'Stamp Pad',
      product_weight : '250ml',
      product_price : '20',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriT7leO0Kx7pkP4Fo54TlhbdkchYFbEGxjQ&usqp=CAU'
    },
    {
      p_id : '16',
      product_name : 'Laptop',
      product_weight : '250ml',
      product_price : '69999',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFPqU3rg0U1KKOvvgK3rkzMZQpg7LiQBkXQ&usqp=CAU'
    },
    {
      p_id : '17',
      product_name : 'Envelope (100 Nos.)',
      product_weight : '250ml',
      product_price : '169',
      product_image : 'https://5.imimg.com/data5/VN/DC/MY-63677780/small-white-paper-envelope-500x500.jpg'
    },
    {
      p_id : '18',
      product_name : 'Single Hole Punch',
      product_weight : '250ml',
      product_price : '95',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0HEEcrMAGD_Xr_mrlDd-qoCBi_sROtT3-w&usqp=CAU'
    },
    {
      p_id : '14',
      product_name : 'Inkjet Printer',
      product_weight : '250ml',
      product_price : '12899',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFuTPZzw13WlDiy3V_i2dxpLLJQGcnA0VlQ&usqp=CAU'
    },
    {
      p_id : '14',
      product_name : 'Fevi-stick',
      product_weight : '250ml',
      product_price : '25',
      product_image : 'https://m.media-amazon.com/images/I/510RV8o69hL._SX522_.jpg'
    },
    {
      p_id : '14',
      product_name : 'Projector',
      product_weight : '250ml',
      product_price : '8490',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSts0j2dQoB0hLMI7JUYrzkkoUVe_65NEGsuQ&usqp=CAU'
    }
  ]
} 