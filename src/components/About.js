import React from 'react';

function About() {
  return (
    <div>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="about-title clearfix">
                <h1 className="header-tag">
                  About
                  {' '}
                  <span>Covid-19</span>
                </h1>
                <h3>
                  Six nature facts related to coronaviruses
                </h3>
                <p className="about-paddingB">
                  Scientists and specialists working at the United Nations Environment Programme
                  (UNEP) have been pulling together the latest scientific
                  facts about the coronavirus—what we know about the virus and what we don’t know.
                  <br />

                  <p>
                    While the origin of the outbreak and its transmission pathway
                    are yet to be discovered, here are six important points worth knowing:
                  </p>
                  <p>
                    1. The interaction of humans or livestock with wildlife exposes them to
                    the risk of spillover of potential pathogens. For many zoonoses,blivestock
                    serve as an epidemiological bridge between wildlife and human infections.
                  </p>

                  <p>
                    2. The drivers of zoonotic disease emergence are changes in the
                    environment—usually the result of human activities, ranging
                    from land use change to changing climate; changes in animals
                    or human hosts; and changes in pathogens, which always evolve
                    to exploit new hosts.
                  </p>

                  <p>
                    3. For example, bat-associated viruses emerged due to the loss
                    of bat habitat from deforestation and agricultural expansion.
                    Bats play important roles in ecosystems by being night pollinators
                    and eating insects.
                  </p>

                  <p>
                    4. Ecosystem integrity underlines human health and development.
                    Human-induced environmental changes modify wildlife population
                    structure and reduce biodiversity, resulting in new environmental
                    conditions that favour particular hosts, vectors, and/or pathogens.
                  </p>

                  <p>
                    5. Ecosystem integrity can help regulate diseases by supporting a
                    diversity of species so that it is more difficult for one pathogen
                    to spill over, amplify or dominate.
                  </p>

                  <p>
                    6. It is impossible to predict where the next outbreak will come from
                    or when it will be. Growing evidence suggests that outbreaks or epidemic
                    diseases may become more frequent as climate continues to change.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
