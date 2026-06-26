"use client";

export function COIForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
      {/* Trust indicator */}
      <div className="flex items-center gap-3 mb-8 p-4 bg-blue-50 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
        <p className="text-sm text-slate-700">
          <strong className="text-blue-700">Your information is secure.</strong> Certificates are typically delivered within 1 hour during business hours.
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your certificate request has been submitted. We will contact you shortly."); }}>
        
        {/* Section: Policyholder Info */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
            Policyholder Information
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="business_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400"
                placeholder="ABC Hooklift Services LLC"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Mike Rodriguez"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(844) 967-5247"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="mike@abchooklift.com"
              />
            </div>
          </div>
        </div>

        {/* Section: Certificate Details */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
            Certificate Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Policy Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="policy_number"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="CCA-2026-XXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Certificate Type <span className="text-red-500">*</span>
              </label>
              <select
                name="certificate_type"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select certificate type</option>
                <option value="acord-25">ACORD 25 — Certificate of Liability Insurance</option>
                <option value="additional-insured">Additional Insured — Endorsement</option>
                <option value="waiver-of-subrogation">Waiver of Subrogation</option>
                <option value="primary-non-contributory">Primary &amp; Non-Contributory</option>
                <option value="cancellation">30-Day Cancellation Notice</option>
                <option value="multiple">Multiple (describe in notes)</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Certificate Holder Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="certificate_holder"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="General Contractor / Property Owner / Entity Name"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Certificate Holder Address
              </label>
              <input
                type="text"
                name="certificate_holder_address"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1234 Industrial Blvd, Phoenix, AZ 85001"
              />
            </div>
          </div>
        </div>

        {/* Section: Request Details */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
            Request Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Job or Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="project_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Downtown Phoenix Mixed-Use Project"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Additional Notes or Special Instructions
              </label>
              <textarea
                name="notes"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Any specific requirements, limits, or additional insureds to include..."
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            Submit Certificate Request
          </button>
          <p className="text-xs text-slate-500 mt-3">
            Requests submitted after 4pm Arizona time will be processed the next business morning.
          </p>
        </div>
      </form>

      {/* Contact alternative */}
      <div className="mt-6 text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
        <p className="text-sm text-slate-600 mb-2">Need it urgent? Call us directly:</p>
        <a href="tel:844-967-5247" className="text-xl font-bold text-blue-600 hover:text-blue-700">
          844-967-5247
        </a>
        <p className="text-xs text-slate-500 mt-1">Available 24/7 for certificate requests</p>
      </div>
    </div>
  );
}
