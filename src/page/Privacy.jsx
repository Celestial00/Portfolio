export default function Privacy() {
  return (
    <div className="text-white dark:text-black    py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-6 cursor-pointer hover:text-[#FF6A00]  ">
        Last Updated: June 2025
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Hey There — Welcome!</h2>
        <p className="text-gray-400">
          Thanks for checking out my site! This Privacy Policy is just a quick
          walkthrough of what kind of data I handle (spoiler: not much), how I
          use it, and how I respect your privacy every step of the way.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          What Information I Collect (Short Answer: Very Little)
        </h2>
        <p className="text-gray-400">
          This is a personal portfolio website, so I don’t actively collect or
          track personal information. There are no logins, cookies, or trackers
          lurking in the background.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Contact Forms & Email</h2>
        <p className="text-gray-400">
          If you decide to reach out through a form or email, the info you
          provide (like name, email, message) is used solely to respond to you.
          That’s it—no newsletters, no sales funnels.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> How I Use That Info</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Respond to your questions or feedback</li>
          <li>Improve the site based on your suggestions</li>
          <li>Keep things running smoothly</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          {" "}
          Sharing Your Info (I Don’t)
        </h2>
        <p className="text-gray-400">
          I don’t sell, rent, or share your info with third parties. If you ever
          accidentally send sensitive info and want it removed, just contact
          me—I’ll take care of it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Security Stuff</h2>
        <p className="text-gray-400">
          I take your privacy seriously and try to keep your data safe. That
          said, no website is 100% immune to issues. I’ll do my best to protect
          your information, but can’t guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Policy Updates</h2>
        <p className="text-gray-400">
          This Privacy Policy is up to date as of <strong>June 2025</strong>. If
          anything changes, I’ll update it right here. No surprise changes—just
          transparency.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2"> Got Questions?</h2>
        <p className="text-gray-400">
          Feel free to reach out anytime at{" "}
          <a
            href="mailto:hello@yourdomain.com"
            className="text-[#FF6A00] hover:underline"
          >
            SheerazAlee223@gmail.com
          </a>{" "}
          or through the contact form on the site. Whether it's a privacy
          concern or just a hello, I’d love to hear from you!
        </p>
      </section>
    </div>
  );
}
