import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function PrivacyModal({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={'Privacy Policy'}>
            <p>
              We humbly present this Privacy Policy, an elucidation of our
              practices concerning the collection, utilization, and disclosure
              of information pertaining to users of our esteemed service. It
              delineates the privacy rights bestowed upon our users and
              elucidates the legal safeguards in place.
            </p>
            <p>
              By utilizing our service, you manifest your agreement to the
              collection and utilization of your information as expounded in
              this Privacy Policy.
            </p>
            <p>
              Definitions and Scope The ensuing definitions explicate
              capitalized terms employed within this Privacy Policy. These
              definitions hold true whether the terms are employed in singular
              or plural form.
            </p>
            <p>
              Definitions For the purposes of this Privacy Policy: Account: A
              distinct account established by users to access our service.
              Company: The organization responsible for providing the service,
              denoted as "we," "us," or "our." Cookies: Small files placed by
              websites on computers, mobile devices, and other devices,
              containing information such as browsing history. Device: Any
              device capable of accessing the service, including but not limited
              to computers, cellphones, or digital tablets. Personal data:
              Information that can be employed to identify or contact a specific
              individual. Service: Our company's website or platform.
              Third-party: Any website or social network that enables users to
              log in or create an account for the purpose of utilizing our
              service. Usage Data: Information automatically collected regarding
              user interactions with the service
            </p>
            <p>
              Collection and Use of Personal Data Data Acquisition During user
              interactions with our service, we may collect personally
              identifiable information that enables us to contact or identify
              individuals. This information may include, but is not limited to:
              Email address.
            </p>
            <p>
              Utilization of Information Upon accessing our service, certain
              information is automatically collected, including the IP address
              of the device, browser type and version, visited pages, duration
              of visit, unique device identifiers, and other diagnostic data.
              When accessing the service via a mobile device, additional
              information may be collected, such as the mobile device type,
              unique ID, device IP address, mobile operating system, type of
              mobile internet browser, unique device identifiers, and other
              diagnostic data. Furthermore, data may be gathered when users
              access our service through a browser or mobile device. Tracking
              Technologies and Cookies To monitor service activity and store
              specific information, we employ cookies and similar tracking
              technologies, including beacons, tags, and scripts. These
              technologies aid us in enhancing and analyzing our service.
            </p>
            <p>
              Purpose of Personal Data Usage Personal data is utilized for the
              following purposes:
              <br />
              Provision and maintenance of the service, including tracking of
              usage. Management of user accounts, registrations, and access to
              service functionality. Creation and execution of purchase
              contracts for goods or services obtained through the service.
              Communication with users via email or electronic means to provide
              updates or notifications regarding new functionalities, products,
              services, or security updates. Handling and response to user
              inquiries and requests.
            </p>
            <p>
              Disclosure of Personal Data Personal information may be disclosed
              in the following circumstances: Provision and maintenance of the
              service, including tracking of usage. Sharing of Personal Data
              with service providers for the purpose of monitoring and analyzing
              service usage and contacting users.
            </p>
            <p>
              Retention of Personal Data Personal Data is retained only for the
              duration necessary to fulfill legal obligations, resolve disputes,
              and enforce legal agreements and policies, as expounded in this
              Privacy Policy. Usage Data is typically retained for a shorter
              period, unless required for security, service enhancement, or
              compliance with legal requirements.
            </p>
            <p>
              While we prioritize the security of personal information and
              employ commercially acceptable safeguards to protect it, we
              acknowledge that no method of Internet transmission or electronic
              storage is entirely secure.
            </p>
            <p>
              Please be aware that requesting the removal of online content or
              information does not guarantee its complete eradication. In
              certain instances, the law may not permit or mandate its removal.
            </p>
            <p>
              We reserve the right to modify our privacy policies at any time,
              with such changes communicated through the posting of the updated
              policy on this page. Users will also be notified via email and/or
              visible notifications on our service
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;
