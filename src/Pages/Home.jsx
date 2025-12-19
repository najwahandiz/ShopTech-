import React, { useState } from 'react'
import './Home.css'
import ProductCard from '../Components/ProductCard/ProductCard'
import productsData from '../data/productsData';


export default function Home() {

    const products = productsData;
    const bestSellersId=[12,26,33,35];
    const bestSellers=products.filter(product=>
        bestSellersId.includes(product.id)
    );

    const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && comment.trim()) {
      setSubmitted(true);
    }
  };
    

  return (
    <div className="homePage">

        <section className="modern-hero">
            <div className="hero-grid">

                <div class="grid-item portrait-model">
                    <img className='jwImg' src="/Images/2summer.jpg" alt="Collection Mode"/>
                </div>

                <div class="grid-item jewelry-center">
                    <img src="/Images/winterCategory.jpg" alt=""/>
                    <div class="hero-overlay">
                        <h1 class="hero-title">New  Collection</h1>
                        <div class="badge-container">
                            <span class="badge">Timeless Elegance for Every Season</span>
                        </div>
                        <a href={'#CategorySection'} class="btn-shop">Explore Collection</a>
                    </div>
                </div>

                <div >
                    <img className="grid-item shoes-top jwImg" src="/Images/bag-heels3.jpg" alt="Chaussures élégantes"/>
                </div>

                <div >
                    <img className=' grid-item jwImg' src="/Images/5jewleryCategory.jpg" alt="Accessoires de luxe"/>
                </div>
            </div>
        </section>



        <section className='CategorySection' id="CategorySection">
            <h1>Shop Categories</h1>
            <div className='categories'>
                <div className='categoryCard'>
                    <img className='catImg' src="/Images/Coat long.jpg" alt="Category 1" />
                    <h3>Winter Clothes</h3>
                </div>

                <div className='categoryCard'> 
                    <img src="/Images/summerCategory.jpg" alt="Category 2" />
                    <h3>Summer Clothes</h3>
                </div>

                <div className='categoryCard'>
                    <img src="/Images/bagCategory.jpg" alt="Category 3" />
                    <h3>Bags</h3>
                </div>

                <div className='categoryCard'>
                    <img src="/Images/jwCategory.jpg" alt="Category 4" />
                    <h3>Jewelry</h3>
                </div> 
            </div>
        </section>



        <section className="aboutSection">
        <div className="aboutHeader">
            <h3>The Story</h3>
            <h1>Crafting Elegance</h1>
        </div>

        <div className="aboutContent">
            <div className="aboutImage">
            <img src="/Images/elegent.png" alt="Crafting Elegance" />
            </div>

            <div className="aboutText">
            <p className="storyText">
                <span className="dropCap">N</span>
                ELEGANCE was founded on a simple premise: that true luxury lies in the details.
                In an era of fast fashion and fleeting trends, we stand for permanence.
                We believe in the power of a perfectly cut coat, the weight of a well-crafted bag,
                and the confidence that comes from wearing something truly exceptional.
            </p>

            <p>
                Our atelier works with the finest materials sourced from sustainable partners across the globe.
                From the highlands of Peru for our alpaca wool to the tanneries of Tuscany for our leathers,
                every material is chosen with intention.
            </p>

            <p>
                We do not follow seasons; we define them.
                Our collections are curated narratives, designed not just to be worn,
                but to be lived in. Welcome to the new standard of modern luxury.
            </p>
            </div>
        </div>
        </section>


        <section className='bestSellersSection'>
            <h1>Best Sellers</h1>
            <div className='bestSellersCards'>
                {bestSellers.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>


        <section className="Commentsection">
  <h1>What Our Customers Say</h1>

  <div className="commentCards">
    <div className="commentCard">
      <span className="quote">“</span>
      <p>
        The quality of the fabrics and the attention to detail are unparalleled.
        I've never felt more confident in my wardrobe.
      </p>
      <div className="rating">★★★★★</div>
      <h3>Anna K.</h3>
    </div>

    <div className="commentCard">
      <span className="quote">“</span>
      <p>
        Elegant's pieces are timeless. I invested in a coat last year,
        and it's still my go-to for every occasion.
      </p>
      <div className="rating">★★★★★</div>
      <h3>Michael B.</h3>
    </div>

    <div className="commentCard">
      <span className="quote">“</span>
      <p>
        From the moment I walked into their boutique, I knew I was in for
        something special. The customer service is exceptional.
      </p>
      <div className="rating">★★★★★</div>
      <h3>Sophia L.</h3>
    </div>
  </div>
</section>




        <section className="newsletterSection">
            <h2>Laissez un commentaire</h2>
            <p>Partagez votre avis ou une suggestion avec nous !</p>

            {submitted ? (
            <div className="commentThanks">
                Merci <strong>{name}</strong> pour votre commentaire !
            </div>
            ) : (
            <form className="newsletterForm" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                />

                <textarea
                placeholder="Votre commentaire"
                value={comment}
                onChange={e => setComment(e.target.value)}
                required
                rows={3}
                />

                <button type="submit">Envoyer</button>
            </form>
            )}
        </section>



    
       
    


        
    </div>
  )
}
