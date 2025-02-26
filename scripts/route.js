document.addEventListener("DOMContentLoaded",
    function () {
        const historyBtn = document.getElementById("history-btn");
        const donationBtn = document.getElementById("donation-btn");
        const donateSection = document.getElementById("donate-section");
        const historySection = document.getElementById("history-section");

        if (historyBtn && donateSection && donationBtn && historySection) {

            document.getElementById("history-btn").addEventListener("click",
                function () {
                    handleButtonToggle(historyBtn, donationBtn)
                    handleSectionStyle(historySection, donateSection)
                }
            )

            document.getElementById("donation-btn").addEventListener("click",
                function () {
                    handleButtonToggle(donationBtn, historyBtn)
                    handleSectionStyle(donateSection, historySection)
                }
            )
        }
    }
)

