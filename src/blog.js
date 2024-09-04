import { blogCards } from "./data/blogData";
import { pictureOverlayFactory } from "./support/pictureOverlay";

const blogFactory = (interfaceLayer) => {
    // Data
    //------------------------------------------------------------------------
    const screenshotOverlay = pictureOverlayFactory();
    const templateBlogCard = document.querySelector(".blogCard");
    const blogContainer = document.querySelector("#blogContainer");
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const writeBlogToDom = (blogData) => {
        const newSectionDOM = templateBlogCard.cloneNode(true);
        newSectionDOM.dataset.blogCardID = blogData.blogCardID;
        newSectionDOM.querySelector(".blogTitle").textContent = blogData.blogCardTitle;
        newSectionDOM.querySelector(
            ".blogDate"
        ).textContent = `${blogData.monDayYear[0]} ${blogData.monDayYear[1]}, ${blogData.monDayYear[2]}`;
        newSectionDOM.querySelector(".blogDesc").textContent = blogData.blogDesc;
        if (blogData.blogImg != null) {
            const imgDOM = newSectionDOM.querySelector(".blogImg");
            imgDOM.src = blogData.blogImg;
            imgDOM.addEventListener("click", () => {
                if (!interfaceLayer.getIsPortrait()) {
                    screenshotOverlay.activate(imgDOM, true);
                }
            });
        } else {
            newSectionDOM.querySelector(".blogDesc").style.cssText = "max-width: 95%;"
        }
        blogContainer.appendChild(newSectionDOM);
    };

    const switchOrientation = (isPortrait) => {
        const descendants = document.querySelector("#blogPageContent").querySelectorAll("*");
        descendants.forEach((descendant) => {
            if (isPortrait) {
                descendant.classList.add("portrait");
            } else {
                descendant.classList.remove("portrait");
            }
        });
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    blogCards.forEach((blogData) => {
        writeBlogToDom(blogData);
    });
    templateBlogCard.parentElement.removeChild(templateBlogCard);
    //------------------------------------------------------------------------

    return {
        switchOrientation,
    };
};

export { blogFactory };
