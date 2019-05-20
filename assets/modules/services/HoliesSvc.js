app.service("HoliesSvc", [
    "FirebaseSvc",
    class HoliesSvc {

      constructor (FirebaseSvc) {
        this.svcs = {
          FirebaseSvc
        };
      }

      fetchAll() {
        const holies = [];
        return this
          .svcs
          .FirebaseSvc
          ._firestore
          .collection("holies")
          .get()
          .then((results) => {
            results.forEach(function(doc) {
              holies.push(doc.data())
            })
          })
          .then(() => {
            return holies;
          })
      }
    }
  ])