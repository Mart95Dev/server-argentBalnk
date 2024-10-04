import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EditProfile from "../components//EditProfile/EditProfile";
import ProfileUSer from "../components/ProfileUser/ProfileUser";

function Profile() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="main bg-dark profile-content">
        <div className="header">
          <EditProfile username="Tony Jarvis !" />
        </div>

        <section className="account">
          <h2 className="sr-only">Account</h2>

          <ProfileUSer
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="vailable Balance"
          />
        </section>
        <section className="account">
          <ProfileUSer
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
        </section>
        <section className="account">
          <ProfileUSer
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Profile;
