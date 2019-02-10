import React from "react"
import Section from '../Components/Section'

const Home = () => (
  <div className="home">
    <div className="home-container">
      <div className="home-left-container">
        <Section title="About Us">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dui erat.
              Proin quis rhoncus diam. Maecenas massa est, aliquam in arcu vitae, ultrices finibus massa.
              Cras ut sapien vitae elit ullamcorper vulputate. Nulla ac elit pharetra dolor mollis consequat
              sit amet non felis. Fusce a pulvinar sapien. Quisque dictum arcu vitae congue facilisis. Nulla
              facilisi. Nunc non erat in ante molestie tempus. Duis molestie, libero at posuere porttitor, ex
              libero accumsan purus, eu egestas dolor justo id risus. Proin eu sodales orci. Suspendisse sed diam
              sed erat gravida rutrum vitae vel enim. Nunc fermentum erat a turpis congue, quis mollis eros
              placerat. Nam at ornare velit, id pellentesque lorem. Suspendisse fringilla velit sed tortor
              pellentesque, non interdum justo mollis. Quisque mattis maximus fringilla. Nulla ut consequat quam,
              sagittis sodales ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tincidunt
              est, eu imperdiet lectus.
            </p>

            <p>
              Aenean condimentum, ipsum aliquet vehicula lacinia, eros ipsum tincidunt lectus,
              eget semper augue ipsum vel lectus. Sed nec finibus lacus, vitae vestibulum metus. Etiam
              vehicula commodo enim a sodales. Fusce quis mattis urna. Nunc viverra nec eros vitae dictum.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur non dui ornare risus venenatis rhoncus vitae eu eros. Aliquam odio eros, pretium at leo at,
              faucibus aliquet risus.
            </p>
          </div>
        </Section>

        <Section title="Contact Us">
        <div className="home-contact-container">
          <div className="home-contact">
            <div>Fake Headquarters</div>
            <div>Software Development Office</div>
            <div>1000 Dallas Pkwy</div>
            <div>Dallas, TX 75034</div>
          </div>
          <div className="home-contact">
            <div>Toll Free: (888) 555-5555</div>
            <div>Local: (555) 555-5555</div>
          </div>
        </div>
        </Section>
      </div>

      <Section title="Blog">
      {/* Iterate over multiple blogs here */}
        <div>
          <div style={{
            margin: "50px 0"
          }}>
            <img
              src={`https://loremflickr.com/400/200/cat/?random=8`}
              style={{
                display: "block",
                width: "100%",
                maxWidth: "400px",
                maxHeight:"200px",
                marginBottom: "12px"
              }}
              alt="blog cat"
            />
            <h4>So you want to become a good developer?</h4>
          </div>

          <div style={{
            margin: "50px 0"
          }}>
            <img
              src={`https://loremflickr.com/400/200/cat/?random=10`}
              style={{
                display: "block",
                width: "100%",
                maxWidth: "400px",
                maxHeight:"200px",
                marginBottom: "12px"
              }}
              alt="blog cat 2"
            />
            <h4>Become the best developer you can be</h4>
          </div>
        </div>
      </Section>
    </div>

  </div>
);

export default Home;