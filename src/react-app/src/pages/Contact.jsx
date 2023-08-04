import ContactForm from 'components/contactForm/ContactForm';
import Footer from 'components/footer';
import Container from 'components/container/Container';
import Section from 'components/section/Section';

function Contact() {
  return (
    <>
      <main>
        <Section>
          <Container>
            <ContactForm />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
