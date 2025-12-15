import React from 'react'
import './Home.css'


export default function Home() {
  return (
    <div className="homePage">

        <section className='heroSection'>

            <h3>new Collection 2025</h3>
            <h1>Timeless Elegance<br/> for Every Season</h1>
            <h4>Discover the epitome of elegance with our latest arrivals. Designed for the modern muse.</h4>
            <button>Explore Collection</button>

        </section>

        <section className='CategorySection'>
            <h1>Shop Categories</h1>
            <div className='categories'>
                <div className='categoryCard'>
                    <img className='catImg' src="/Images/winterCategory.jpg" alt="Category 1" />
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


        <section className='aboutSection'>
            <h3>The Story</h3>
            <h1>Crafting Elegance</h1>
            <img src="/Images/aboutSection.png" alt="" />
            <p class="storyText">
              <span class="dropCap">E</span>LEGANT was founded on a simple premise: that true luxury lies in the details.
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
            
        </section>

        <section className='newsletterSection'>
            <h2>Subscribe to our Newsletter</h2>
            <p>Stay updated with the latest trends and exclusive offers.</p>
            <div className='newsletterForm'>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>

        </section>

        
    </div>
  )
}
