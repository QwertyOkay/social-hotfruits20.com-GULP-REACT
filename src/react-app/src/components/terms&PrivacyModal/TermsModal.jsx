import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal" closeModal={showTerms}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title={'Terms & Conditions'}>
            <p>
              Before using our service, we kindly ask that you carefully read
              and comprehend these terms and conditions. It is important to note
              that capitalized words in these terms and conditions have the same
              meaning whether they are singular or plural.
            </p>
            <p>
              The "Site" may be referred to as "the Site," "We," "Us," or "Our"
              in the context of these terms and conditions. A "Device" is any
              digital device that can connect to the Service, such as a
              computer, smartphone, or digital tablet. The term "Service" refers
              to the Website, while "You" refers to the person or legal entity
              who accesses or uses the Service.
            </p>
            <p>
              By using this Service, you expressly acknowledge that you have
              read, understood, and agreed to be bound by the Terms and
              Conditions. These Terms and Conditions outline all users' rights
              and responsibilities when using the Service and establish the
              relationship between you and the Site.
            </p>
            <p>
              Your use of the Service is contingent on your full acceptance and
              adherence to these Terms and Conditions, which apply to all
              visitors, users, and anyone else who accesses or uses the Service.
            </p>
            <p>
              You agree to be bound by these Terms and Conditions by accessing
              or using the Service. You are not permitted to use the Service if
              you disagree with any of these Terms and Conditions.
            </p>
            <p>
              To access and use the Service, you must confirm that you are at
              least 18 years old. Individuals under the age of 18 are not
              permitted to access or use the Service.
            </p>
            <p>
              Your acceptance and compliance with the Site's Privacy Policy also
              governs your access to and use of the Service. Our Privacy Policy
              goes into detail about your privacy rights, how the law protects
              you, and our policies and procedures for collecting, using, and
              disclosing your personal information while using the Application
              or the Website. We strongly advise you to read our Privacy Policy
              before using our Service.
            </p>
            <p>
              The Service may include hyperlinks to third-party websites.
              However, to the greatest extent permitted by applicable law, the
              Site and its suppliers shall not be liable for any special,
              incidental, indirect, or consequential damages, including but not
              limited to damages for loss of profits, loss of data or other
              information, business interruption, or personal injury or loss of
              privacy, arising from or in connection with the use or inability
              to use the Service.
            </p>
            <p>
              The Service is provided to you on a "AS IS" and "AS AVAILABLE"
              basis, and it may contain flaws and defects that are not covered
              by any warranty, express, implied, statutory, or otherwise. To the
              greatest extent permitted by law, the Site, its affiliates,
              licensors, and service providers expressly disclaim all
              warranties, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, title, and
              non-infringement, as well as any warranties arising from course of
              dealing, course of performance, usage, or trade practice.
            </p>
            <p>
              We make no warranty or representation about the Service's ability
              to meet your needs, achieve desired results, or run without
              interruptions or errors. We also do not guarantee the accuracy,
              reliability, or currency of any information made available via the
              Service.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
