import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonList, IonPage, IonThumbnail } from '@ionic/react'

import { products } from './data'
import { useEffect, useState } from 'react';

interface IProduct {
      id: number,
      name: string,
      price: number,
      category: string,
      description: string,
      image: string,
      inStock: boolean,
      rating: number,
}

const Reactlearning = () => {
  const [selectedProduct,setSelectProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
    //console.log("all selectedProducts",selectedProduct);
  },[selectedProduct]);

  const handleSelectProduct = (product:IProduct) => {
    console.log("SelectedProduct",product);
    setSelectProducts((prevProduct)=>[...prevProduct,product]);
  };

  
  return (
    <IonPage>
        <IonContent>
          <IonCard>
                 <IonCardHeader>
                 <IonCardTitle>Card Title</IonCardTitle>
                 <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                 </IonCardHeader>
                 <IonCardContent>
          {products.map((product,productIndex)=>{
            return(
              <div key={productIndex}>
                 <IonList><IonItem>
                 <IonThumbnail slot="start">
                 <img alt="" src={product.image}/>
                 </IonThumbnail>
                 
                 <div><IonLabel>{product.name}</IonLabel>
                 <div>{product.description}</div>
                 <br/>
                 <IonButton
                 onClick={()=>{handleSelectProduct(product)}}
                 >
                  Select Product</IonButton>
                 </div>
                 </IonItem>
                </IonList>
              </div>   
            );
          })}
          </IonCardContent></IonCard>
          </IonContent>
          </IonPage>
    
  )
}

export default Reactlearning
