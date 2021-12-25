import React from "react";
import "./DiseaseDetection.css";

function DiseaseDetection() {
  return (
    <>
      <div className="header">Disease Prediction</div>

      <div className="card text-dark bg-light border-dark mb-5 mt-5" style={{ maxWidth: 540, margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://c.ndtvimg.com/2021-02/bjit1g3o_breast-cancer_625x300_04_February_21.jpg?im=Resize=(1230,900)"
              className="img-fluid rounded-start"
              alt="..."
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Breast Cancer Disease Prediction</h5>
              <h6 style={{ textDecoration: "underline" }}>
                Detect Breast Cancer
              </h6>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Symptoms of breast cancer include a lump in the breast, bloody
                discharge from the nipple and changes in the shape or texture of
                the nipple or breast.
              </p>
              <a
                href="https://breastcancerdetectionweb.herokuapp.com/"
                class="btn btn-primary"
                target="_blank"
              >
                Detect Disease
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="card text-dark bg-light border-dark mb-5 mt-5" style={{ maxWidth: 540, margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Diabeties Disease Prediction</h5>
              <h6 style={{ textDecoration: "underline" }}>
                Detect Diabeties Disease
              </h6>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Diabetes is a disease that occurs when your blood glucose, also
                called blood sugar, is too high. Blood glucose is your main
                source of energy and comes from the food you eat.
              </p>
              <a
                href="https://diabetiespredictionweb.herokuapp.com/"
                class="btn btn-primary"
                target="_blank"
              >
                Detect Disease
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://www.news-medical.net/image.axd?picture=2020%2F4%2Fshutterstock_571889917.jpg"
              className="img-fluid rounded-start"
              alt="..."
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="card text-dark bg-light border-dark mb-5 mt-5" style={{ maxWidth: 540, margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWEhIYGBgYGRgYGhgYEhgYGhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQkISsxNDQ0NDQ0NDQ0NDQxNDE0NDQxNDQ0NDQ0NDE0MTQ2NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NP/AABEIAK0BIwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAD4QAAIBAgMFBgMFBwQCAwAAAAECAAMRBCExBRJBUWEicYGRobETMsEGQnLR8CNSYoKSouEUssLxQ3MHFVP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAsEQACAgIBAwMDAgcAAAAAAAAAAQIRAyExEkFRBCJxMmGRgbETFCNCQ6Hw/9oADAMBAAIRAxEAPwAwnhOCdERoSEmJASQgImJNTICSWABRJrBiEWMAiwqwKwqwAKsIsGsHXe2XMEnuEG6QJWEFTeNl00vO1aUnsindS58PGdxHGZXZpwKhO13QOJpm1xwjWHTK54xhqd1gOzN1aLOpZl0yGvjeHwO1yjblYDcIABUfJbkOIlnUQKLR3YGylqtvugKocrjVvrb8oqY7XLENsbH+PT3qa7zqLow+8D92/IynwX2Gqv2sQd3+BWW/8z/l5zc4h64xGQHw7cr+I5Q1fEDTzP0iofW0qMePsxTBCBVSnnv7l/iORou+RkOds5ZYbZSKm5TpqiHgozbq7at4yyeopNhOqV45St8Etrkrf/qKA1S/1ncLs1Eb4jKOQW2Q698sPgg/Kb+089Am4Oh+sXSvAdb8ieMqM53R6akS22XhGAzFunOMYDAqudpZ6CUokSl2RV4pAMj6W1OkDhqeXcPUnWGqDeYzldt1LDUwCxnBHeLHgCf+o2DA4Wluoo55mdB3j/CuX4m5RksOhuL/AKtJzwnRKJAYmgHW3HgeRlDUQgkEZiaWVu1MP98dx+hjBMqDOSREjAo5PTs9EBihOyAMkDAZISQMGDJgwEwgklgxJiABRCLBLCLGDCrCrArCrAAqmL4nMkDUoQO+5hhAqL1Etpc38M5En2Lii4oJuUlXjYX74uy73dDVnvlwnUWIZAppIu3CTqPOImW82kAEMYd1d4jM5AcyZrtm0fg0VVtQt2/Ec2/Lwma2Ynx8QCfkp9roW0UeefhNHj6mW7xPsIkDXYrcTjG3sjrn4T2bjLT3gq9LPuFobZtQAFTBAzwRVGXO0WxVQcOVvOT2m+7xldhX3mF+cASLjZYPGWC0L5mBwKCPqvOUiGxlFykK7ZQiaQbiUSLqkBUXedR1jgEHRXtluQkspBcU9hlr8o7zPYQAgEfKMl682ipvVbdB7K/Mep+6OtvePMwFlA6ACC3sT0qCXuZORVbDrJCUSdkHUEEHjlJTsBGbrUyrEHgbQJlntWnZg3MeolaYykRnp6eiGYYGSvIAzoMBhAZ0SAhHQqbHofMXjoTkrruSEIIJYQRAEWEWCWEWABVhVgVjNJbxsCTDKL4B+23TPzjNVcj1iezD89+YEyZouC1Q5wpaLIYZBeMSabolSp3zOkX2liLLurHXawsJXCnvuBzNvDj6RMpIutgYX4dIX+ZzvH6emfjJYiuCS3Dh3DSBx+1Kadg1FDWsF3hex6SlxO0RoP1aT1IpQfJavilGsTO00tvIhIHESrpo9U53Ccf4v8RhnSkf2lgtwBfQkiTKfg1jhvkhjMc9YD4aNe/HjB7HqMzNkV3WKG/EjW0fLu62oUyL/fZSFA5jnLHY2y1prui54knUkm5JPOOLbZE4xitcjWBAU3YnvN5coQRcQKUSo7PaHFT9DJYcAHs/KciOKnkRNUc7GUOUi+k6uRI8ZBmvAkkoiuMcqp3fmYhR36/SOoIjiGG+pOiKW8zYexg+ClySplaSBePHmzH6kxnDoQN5vmPp0iGEG+fitp9xef8AFb2ljfifKCEwgkhILn3SUok7Ozk7AQltRLpfkR65SkaaHGLdG7r+Wcz7RlIhPT09EBggZ0GDBkgYFBAY5jxZx+EelxEljuONyD1ceTf5mi+l/ocuR/14fDAiEWCWEWZnSwiwqwSwiQAKgvLCklhFsFRYXLkXJyAHyjv4mOkyWykgGJORiGzGyb8VobH1rAxbYzXUn+M+wkF9i3Rcu7/IhqTWi61ANSBnbWKPii3ZpWLcTqqjn1PSaTdRRy4E3myL7osqjxKliAtYEnQHzOQ95Rbe2s+GTeL36FRnKLCba/1L8jlcA5W5zFy0ejDC72X22dnI+J+MzsLZkHTpbplJ0Kgd7kgKNBz5XlquDR6JVlv2TbmDbIjxmd2cd0XbWZOR2Qw2amjXUDKK0cQKjbxzUE7oPleV1XGG0ls9HfO+7fhpEpFywujTUa6Lnv7nW+XjGF28i33hvW0ZBkfOUr7MGrEnkLxqnhRYAjSadb7HHLDHuy4wO3fiX3KZsOLNa/gI6cQzdoLutzvqORHESqwNMIcuPAD6S0DNwVv6ZSk2YzjBPSDnEjJjkbZjh3gwWGq3M7SUki6njqJxMMVOWl/KUm2ZNRRYLpKLGPv1WS1xdbgcVVQQvizH+ky53rC/KZbZ9feDOCe27sCdQu+bDylNiiuWaBKgXMm59ByAjOHUntN4CV+GF7FtBoPrLJW9faUiJBCZISKiSjJOidnJ2AiLi4tzmbcWmmmfxiWdh1PrnGNC09JT0RRhsAoO+DxUKO9jYetoqDDldxXsdHQA87bzA+06z02JJDgnOw3bXOtprKOkuGjix5H1ymk3F1VfYjR+Ze8e8cdd7If/AKOP6rflF0QB0Kk2Ygi+uTWOndGcIb7x/dfe/tf/ABKiuzIz5f8AJHsv92LEWNuUKBbWSLITc7wJzsLRioUIVjfMWAHQn/EjoTuma/zEk0nF71x3ArG8JTzuZ7C0VbMBrDqI0+IUfdPlIaS7o2WRv+1/gMRlcQNWplJVMQFXmLXylbicUpUlL5EAg9dDE4VpMUPUJq2mlenWgG3KtgOot4i35iD2HWApkk2ALH2iW0MUjO6VCQN+4KgGxXIixI1+krmRHtTp1XGZYK1MWa3aIJDZZDlCUbdqgwZXCCU0/mtUy7oVPisWv2RWQDPUBSLDzl5gKK000ta4mVwb2pLY/wDkLD+UL+cvsXi13d1yRcsQQL6MQMopR6o7fC/cqM/4eS4q7bT+EYX7c4l3rfDIO4LPe2oPLpeF+yOBAfeUch3+M2+Fo06qMj3dWBB3hbI6j9cpDB7Np0m3U3tcvl9JlKFRW0d+L1CeRpxeqrXYtaSWXwtMgUt0m2sN22enP/Ey1ZKO8Ll9RlZZhKHG1+T0sPqFv2v8AsGwOTDuMvcCgU6ypxSoh/Zjhna5HheG2VUJOZMhrpk1d/B0Rks2JZEmrXDVM1VMKeMPhsIpYkm9rWF8pTtUUD5s5LC12vk3rNYyXdHBkg60zWYemF0AEbEzQ2ky2ub98t8PjSQCVHhlN4yXB52TFJbLAmCtmR4+cBVxgAvY91oIY5d7XM2EptGahLwd2pU3abH+E+0y2x8qFP8AAp8xeX+3Kl6L890zNbDa+HpdEA8svpIlyaRWjS4Q3lnTlVgjLWnLRnIMJKQEnKIOz05OwEeMpdprZz1AP0+kupT7WHaH4R7mMaEJ6enoijA1aoNNM872P8osD5EeUXBggZNTLlLq2ZYcSxxcV5sscNn8Lo7D2M9hKllfqvrp9ZzBHJejt6oT/wAYustypJnLDGskpxfZr97DLCJBKY1QTIsTa2V/y6zBukehVjlIFbLvbvQfMT9I8lPTM9xziuzcPq5Fr6DjbmepjicZnztmnHAKsov8ovpc8pVYnFUUcI5F3suWXG4J5C4GcPtvHfBpltToo/eY6X6DU90+fNiN5w1Uk7zDeP60EalTTJlhWSDjwmgmKxBNRmv95j5kx3ZR/boRo1x/ULSr2lQZTv01y4gcR06yexMcBURT+8pGWhvBP3J/cqcUsTj9qLgOUppf99/+Ilhj6wZlsf8Axp6i594hj8lQcmqf7yPpA0KmcrK6tfBl6SCn05PDkafZlewA4yxVrsJQYSrbOWGz6xZ5xs9eCXJoyuUyNZMyeNz4C814OkyeJcEkDgT7yZrg6sEqbA0SQe1kLy/wdBTmAPCUdDM7pz6HUdxlsKboN5dJMUaZJ2uRzEbPVxk1jF8Ns6oASrjW1oqm2gTnkb5iXlHEoVD5d81jRw5HJIXqYOtbNLjoZc4aqVUBkYZfumMYbEFl0BB4x0YhQBcHLpN4xXZnDPJLhoSbEXGQv4GCbCGwNrH34x9MavUc8tJ0sG3hyP0vH0p9zNya1VGZ27i7oVLWOl+IPWI7IuKKXtexvbT5jC/aukQN5dR6iIfZqtv090aq5Fu/P6yXyaJe01mBbSW1Mynw7gdkSzV7Cao55DYMIIGnpDCUQz07I3koCPXlTtgZr3H3j2Ko76lb2voeoNx6iU74dqdNFdt4jeF73NriwJ4xW7qhpKrsWnpyejKPmwk1gxJLACywHyv0z/scfWLrC4Fsn/AT6gfWBWaS+lfqcuFNZcnygyx/BUd9gOAzP68pXrLzZo7VhyHmf16zGR2xHUPCc0nGOfIyJJ4yBmK+1WK3625fsoLfzNmT5WEzrpG8ZV3ndj953P8Acbelov8ASSbrSDpirrunh6ieR7MCOBETcwJcjQ2jTFJXGjU7byde5j/U7GVyvYwm2sWN9AeNGmb9SCT7xRml5vrZy+htYY3/ANst6L30MstlMwbUTP4Wrwlpgn7U55I9SMjb03LDTyMw20sJUpVGK3KFiQc+Odu+anBYi1r+8dZFIO8AQenvJKU3EwoxrBgTw5aibPZO1EqIA1r+8Rr7IpFg4yHFdQe7lAYjZSs6f6dtwkgEcLmNJdhSyWqZY7V2GHBNPI8xOps10pbyubaMjcD0PCBbGV8P2Kq5jQ8GHQy7wOISumtidbfURquGRKUqtPQTBCqij9mSvQgyxWs5GVNvKTw1YKqocyosTbIxjB1xbdPM295qorycs5S5aFqWHbO62vz5coSmpUWGoz/EvOPvmItU05fQ/lK6aMnJy5M39o2ut5n/ALPHceoRoQp/mzEuvtOSq73Dj0P5TMbCxX7bc4Nn4rn7XmbezeK9pt8Idxd5tTLHC3PaaVuGTfbP5RHfi3YKJojGSLiibiTLWgqbWFoGrVtkMzLsyq2MrmYUwdMGwvrCGNCZ6Ve2NF/m+ktJVba+5/N/xjBclTeenp6Io+aiSWQEmDAAyORex1Fj1HL0k1MCphVMYUuQqmX2BNiD+9+Qt7SgUy4wdS6jmLen+JEio8lliFz784JDJGpcX4qdOk4mTDkZBofLS+bDk7DyYiCsZDEtavVtp8R/95hVkmxFhOJQZjZQSbE2A4DMmWGA2e9VrKMuLHQCa6ls5KVJ1QZlTdjqco4xszlKjH0sG9UqamgVVA/hXIAw+LwJTNdOXKX2GoAQ1KnckmNkxqOkZBXtnLDBYgc4Xamyjm9MZXzA4d3nKtEIkSRvGRrcPjAI2mOucz/iZGlirZe8bpYrjfyvMnE6E0zWYZ945sCOUcqldFt5aTMYbF2zvbullhqzHoOvGSJxLT4hYbrHfGm6+YgUwe416bFDy1X84HDVbHP9dZZUmDZ89OglWyWqDYWtWFuyHHEqwJ8BrLmk28AwVgRwYWmfZNLXv328YxQxtRD829+LP1lRklyZzi2tGpV4Kq9ovgK/xFJ0KmxGvUEeEPXwrMMmt4TflaOSqdMzP2gcKCrZqwyJ9j1mJ2Em5iwL9ndex8NPUz6idiq67tftre9gSPUZyvxH2boI28tHS9mVnBF9b55yHF8msZx4AJjgbrT4amN4OqqG7HOAwX2dKAtSqbyub2f5h0uMjHaOECnNTvDnrBNrkJdL4HKVRn+UWHM/QR6hhwvU8zBYNrZERwGaxRzyfY7PT09KIOyp2yc07j9JbSm20e0vd9YxorLzsheeiKPmwkhBiTEACLCrBKZNTGAZTG8JW3T0MTUwimDC6LdMSudzbvz9YRX5GVCmEQyOkvqPY3YWGe7Gmqu2ZZOySTqTaDpbIorkKYPU3Y+ZjKmTUwUUN5HQWigUWUAd0I4upHQwamFUyzOxFEynWBVGIFyBoOMKFhaa5TFmq5KD7PY566OalPdswsM+IJIz8PONYvAq5vax5jKWlOmLZCcqU4JDb2YraGEdDzHMD3iyYi3GbWthwRYiZ/H7GzJTjJcTSORilHFyzw20DzlBVwzobETy1z5TNxN45DXJjAZaYbFaTE0sZbKWdDHZ6yHGjS0zZJXuJMuPzmdwmOj3+rB0P6ERPSaj7P1bVWUn519UOXox8po1mGw2K3GpudFZb/hbst6NNwpzI7jOnE/acOeNTsJBYhbqe6FgcU4VT3WHechNGYrkFsxf2a93uZHaWDNQDddlI5GwYHUGNYdLKByAEKY1G1TBtp2isw1AW3SW3hzY59cpMqwPzkd4BEaqU7m4yPOCNQfK48eB/KRSWiupskpYC9w3OwsYWlVDd/KA+Ey5obj90/QydJ1Y3GR4jiO+WiWhmUe2j2x+Ee5l5eZ7bDftD0A9pQkI3npG89EUfNhJiDBkwYAEBk1MGDJqYAGUyamBUwqmMAqmFUwCmEUwAOphFMAphVMQB1MKpi6mFUxgetC09DBk2hKPyGZM1ROguXj9ISpTksMuQ/F9BDukEDEWpQb4a8sin0k2pQEZvFYEMLETN4/ZRTMAkdBmO8T6BUoXidXCA5ERNDUqPmzAiTWoRxmo2jsQHMCx5iUGJwLJqLjmJLibRmTw+NIyEs8Pjuf/AHKE3GkLRfrM3E2jM1qYvfUgnIqR5ifSdj434tKlU/fpgnow+Yed58YoYixFpuP/AI82pvLUoMe1TffX/wBb627mDeYlYtOjP1C6kmb9Hi2K7RRebgnuXP8AKQWtacwD7zO3Bbqvux9h4TZ70cdVss5EmeYyBNzKZCCGDroCMxfpzHKTGk6YNWgWhTDkqd0m6n5SdR/CYWrRz3lyPv3yFWw1+U8eTcD4/rWMUzlnwiS7DfkjSqXyORmf2m16jd9vICaIDjMrjGu7nmx9zKXALkDeekbz0BnzgGSBgxJCABQZMGCEmDAAqmEUwKwimMAqmFUwKmEUwAOphFMAphVMQBlMIpgVMIsACOYwg7F+/wCsVMbrVd2kDa+XPnM2aRDYU6fiPsI2YhhD8vefpHwYIbCBdIx8ODSNLpGSKGnrF3pyytnAVliATfDhhpKrF7NHKXlLWHq0wRAqz59jNjKflyPpKXEYF0PaWfRcXhxKrEURnfPvktFqRilNpYbA2kcPiaVS/ZJ3Kn4Hyue42PhGcfgFGmVz5Slrpa41iqmX1WqPrm0NoWyQ3JyHjpL/AGVS3EVelz3nX1nzn7H1DV3C5uVuO/dIAPr6T6VhtD5S1t2YT0qDM+dp5nAEAeEi3uT6GVZmkNUmvxhAYrh0CkW468/OM8Y0xNbIMoZSDobiAwNbNkY9pP7lPyt9PCGp6N3xXEjddHGp7J6iD8gvA9UawJ5C/lMc7TUbXa1JrdPcTJuYwR289B3noDP/2Q=="
              className="img-fluid rounded-start"
              alt="..."
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Heart Disease Prediction</h5>
              <h6 style={{ textDecoration: "underline" }}>
                Detect Heart Disease
              </h6>
              <p className="card-text" style={{ textAlign: "justify" }}>
                It develops when the arteries that supply blood to the heart
                become clogged with plaque. This causes them to harden and
                narrow.
              </p>
              <a
                href="https://heartdiseasepredictionweb.herokuapp.com/"
                class="btn btn-primary"
                target="_blank"
              >
                Detect Disease
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="card text-dark bg-light border-dark mb-5 mt-5" style={{ maxWidth: 540, margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Kidney Disease Prediction</h5>
              <h6 style={{ textDecoration: "underline" }}>
                Detect Kidney Disease
              </h6>
              <p className="card-text" style={{ textAlign: "justify" }}>
                The kidneys filter waste and excess fluid from the blood. As
                kidneys fail, waste builds up.
              </p>
              <a
                href="https://kidneydiseasepredictionweb.herokuapp.com/"
                class="btn btn-primary"
                target="_blank"
              >
                Detect Disease
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/314/314059/kidney-disease-in-3d-render.jpg"
              className="img-fluid rounded-start"
              alt="..."
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DiseaseDetection;
