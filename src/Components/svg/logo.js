
const Logo = ({modifier}) => {
    let width = 264 / modifier;
    let height = 68 / modifier;
    return(
        <svg width={width} height={height} viewBox="0 0 264 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.088 35.296C45.504 35.296 45.824 35.488 46.048 35.872C46.304 36.256 46.432 36.784 46.432 37.456C46.432 38.704 46.128 39.696 45.52 40.432C43.984 42.288 42.432 43.728 40.864 44.752C39.296 45.744 37.44 46.24 35.296 46.24C33.216 46.24 31.44 45.68 29.968 44.56C28.528 43.44 27.152 41.52 25.84 38.8C24.784 36.624 23.952 35.024 23.344 34C22.736 32.944 22.128 32.192 21.52 31.744C20.944 31.296 20.224 31.024 19.36 30.928C19.232 31.6 18.864 33.712 18.256 37.264C18 38.864 17.84 39.84 17.776 40.192C17.456 42.144 16.816 43.648 15.856 44.704C14.896 45.728 13.44 46.24 11.488 46.24C9.344 46.24 7.44 45.616 5.776 44.368C4.144 43.088 2.88 41.328 1.984 39.088C1.088 36.816 0.64 34.24 0.64 31.36C0.64 25.984 1.568 21.344 3.424 17.44C5.312 13.536 7.936 10.56 11.296 8.512C14.688 6.432 18.592 5.392 23.008 5.392C26.08 5.392 28.656 5.856 30.736 6.784C32.816 7.712 34.352 8.992 35.344 10.624C36.368 12.256 36.88 14.096 36.88 16.144C36.88 17.936 36.448 19.696 35.584 21.424C34.752 23.12 33.488 24.624 31.792 25.936C30.096 27.248 28.032 28.224 25.6 28.864C27.136 29.28 28.32 29.952 29.152 30.88C29.984 31.808 30.816 33.168 31.648 34.96C32.544 36.88 33.424 38.288 34.288 39.184C35.184 40.08 36.208 40.528 37.36 40.528C38.384 40.528 39.36 40.192 40.288 39.52C41.216 38.816 42.384 37.632 43.792 35.968C44.176 35.52 44.608 35.296 45.088 35.296ZM12.736 30.88C11.648 30.88 10.896 30.624 10.48 30.112C10.096 29.6 9.904 29.024 9.904 28.384C9.904 27.616 10.144 27.008 10.624 26.56C11.136 26.112 11.712 25.888 12.352 25.888H13.552C14.064 22.752 14.544 20.048 14.992 17.776C15.408 15.696 16.752 14.656 19.024 14.656C20.848 14.656 21.76 15.472 21.76 17.104C21.76 17.456 21.744 17.728 21.712 17.92L20.272 25.888C22 25.792 23.568 25.376 24.976 24.64C26.416 23.904 27.552 22.88 28.384 21.568C29.248 20.256 29.68 18.768 29.68 17.104C29.68 15.088 28.992 13.504 27.616 12.352C26.24 11.2 24.224 10.624 21.568 10.624C18.432 10.624 15.68 11.408 13.312 12.976C10.976 14.512 9.152 16.816 7.84 19.888C6.528 22.928 5.872 26.64 5.872 31.024C5.872 33.072 6.08 34.832 6.496 36.304C6.912 37.776 7.424 38.88 8.032 39.616C8.64 40.352 9.216 40.72 9.76 40.72C10.176 40.72 10.512 40.512 10.768 40.096C11.056 39.68 11.28 39.008 11.44 38.08L12.736 30.88ZM48.8264 20.464C47.4824 20.464 46.4744 20.16 45.8024 19.552C45.1304 18.912 44.7944 18.032 44.7944 16.912C44.7944 15.792 45.2264 14.864 46.0904 14.128C46.9864 13.36 48.0904 12.976 49.4024 12.976C50.5864 12.976 51.5464 13.264 52.2824 13.84C53.0184 14.416 53.3864 15.232 53.3864 16.288C53.3864 17.568 52.9704 18.592 52.1384 19.36C51.3064 20.096 50.2024 20.464 48.8264 20.464ZM48.4424 46.24C46.3624 46.24 44.8424 45.504 43.8824 44.032C42.9544 42.56 42.4904 40.608 42.4904 38.176C42.4904 36.736 42.6664 34.896 43.0184 32.656C43.4024 30.384 43.8824 28.272 44.4584 26.32C44.7464 25.296 45.1304 24.592 45.6104 24.208C46.0904 23.824 46.8584 23.632 47.9144 23.632C49.5464 23.632 50.3624 24.176 50.3624 25.264C50.3624 26.064 50.0584 27.92 49.4504 30.832C48.6824 34.352 48.2984 36.736 48.2984 37.984C48.2984 38.944 48.4264 39.68 48.6824 40.192C48.9384 40.704 49.3704 40.96 49.9784 40.96C50.5544 40.96 51.2744 40.56 52.1384 39.76C53.0024 38.96 54.1544 37.696 55.5944 35.968C55.9784 35.52 56.4104 35.296 56.8904 35.296C57.3064 35.296 57.6264 35.488 57.8504 35.872C58.1064 36.256 58.2344 36.784 58.2344 37.456C58.2344 38.736 57.9304 39.728 57.3224 40.432C54.1544 44.304 51.1944 46.24 48.4424 46.24ZM79.9829 35.296C80.3989 35.296 80.7189 35.488 80.9429 35.872C81.1989 36.256 81.3269 36.784 81.3269 37.456C81.3269 38.736 81.0229 39.728 80.4149 40.432C79.0389 42.128 77.5509 43.52 75.9509 44.608C74.3829 45.696 72.5909 46.24 70.5749 46.24C68.8789 46.24 67.5029 45.632 66.4469 44.416C64.6229 45.6 62.7189 46.208 60.7349 46.24C60.3189 52.416 59.3749 57.568 57.9029 61.696C56.4309 65.856 54.2709 67.936 51.4229 67.936C49.6949 67.936 48.4149 67.312 47.5829 66.064C46.7509 64.816 46.3349 63.088 46.3349 60.88C46.3349 57.744 47.0549 54.08 48.4949 49.888C49.9349 45.728 52.1589 41.136 55.1669 36.112C55.1669 31.44 55.1349 28.192 55.0709 26.368C55.0389 25.44 55.4069 24.704 56.1749 24.16C56.9429 23.616 57.9029 23.344 59.0549 23.344C59.7269 23.344 60.2069 23.488 60.4949 23.776C60.8149 24.032 60.9909 24.56 61.0229 25.36C61.0229 26.16 61.0389 26.752 61.0709 27.136C62.0949 25.856 63.1029 24.944 64.0949 24.4C65.0869 23.824 66.1429 23.536 67.2629 23.536C69.0549 23.536 70.5109 24.256 71.6309 25.696C72.7829 27.136 73.3589 29.024 73.3589 31.36C73.3589 33.056 73.0869 34.704 72.5429 36.304C71.9989 37.904 71.2469 39.36 70.2869 40.672C70.9589 40.864 71.5189 40.96 71.9669 40.96C73.0229 40.96 74.0309 40.576 74.9909 39.808C75.9509 39.04 77.1829 37.76 78.6869 35.968C79.0709 35.52 79.5029 35.296 79.9829 35.296ZM60.9749 41.632C62.1269 41.376 63.1829 40.752 64.1429 39.76C65.1349 38.736 65.9189 37.488 66.4949 36.016C67.0709 34.512 67.3589 32.944 67.3589 31.312C67.3589 30.352 67.1669 29.632 66.7829 29.152C66.3989 28.64 65.8869 28.384 65.2469 28.384C64.0949 28.384 62.7029 29.6 61.0709 32.032C61.0389 33.44 61.0229 35.504 61.0229 38.224C61.0229 39.696 61.0069 40.832 60.9749 41.632ZM51.8069 63.232C52.6709 63.232 53.3909 61.344 53.9669 57.568C54.5429 53.824 54.9109 49.152 55.0709 43.552C53.6949 46.752 52.6069 49.808 51.8069 52.72C51.0069 55.632 50.6069 58.08 50.6069 60.064C50.6069 61.088 50.7349 61.872 50.9909 62.416C51.2149 62.96 51.4869 63.232 51.8069 63.232ZM93.3963 46.24C90.5483 46.24 87.9723 45.6 85.6683 44.32C83.3963 43.04 81.5883 41.168 80.2443 38.704C78.9003 36.208 78.2283 33.232 78.2283 29.776C78.2283 24.912 79.1083 20.624 80.8683 16.912C82.6603 13.2 85.0763 10.336 88.1163 8.32C91.1883 6.304 94.5803 5.296 98.2923 5.296C101.14 5.296 103.7 5.936 105.972 7.216C108.276 8.496 110.1 10.384 111.444 12.88C112.788 15.344 113.46 18.304 113.46 21.76C113.46 26.624 112.564 30.912 110.772 34.624C109.012 38.336 106.596 41.2 103.524 43.216C100.484 45.232 97.1083 46.24 93.3963 46.24ZM93.8763 40.576C96.3723 40.576 98.5643 39.808 100.452 38.272C102.372 36.736 103.844 34.608 104.868 31.888C105.892 29.136 106.404 26.032 106.404 22.576C106.404 18.768 105.604 15.888 104.004 13.936C102.404 11.952 100.34 10.96 97.8123 10.96C95.3483 10.96 93.1723 11.728 91.2843 13.264C89.3963 14.768 87.9243 16.896 86.8683 19.648C85.8123 22.368 85.2843 25.472 85.2843 28.96C85.2843 32.768 86.0843 35.664 87.6843 37.648C89.2843 39.6 91.3483 40.576 93.8763 40.576ZM150.824 32.56C151.72 32.56 152.168 33.232 152.168 34.576C152.168 37.136 150.12 38.416 146.024 38.416C145.864 38.416 144.968 38.368 143.336 38.272C143.688 39.968 143.96 41.904 144.152 44.08C144.376 46.224 144.488 48.368 144.488 50.512C144.488 53.968 143.896 56.608 142.712 58.432C141.56 60.256 140.072 61.168 138.248 61.168C135.944 61.168 134.296 59.536 133.304 56.272C132.344 53.008 131.864 48.08 131.864 41.488C131.864 39.792 131.912 38.08 132.008 36.352C131.72 36.384 131.256 36.4 130.616 36.4C129.752 36.4 129.048 36.416 128.504 36.448C128.824 38.816 129.064 41.088 129.224 43.264C129.416 45.44 129.512 47.856 129.512 50.512C129.512 53.968 128.92 56.608 127.736 58.432C126.584 60.256 125.096 61.168 123.272 61.168C120.968 61.168 119.32 59.536 118.328 56.272C117.368 53.008 116.888 48.08 116.888 41.488C116.888 35.312 117.496 29.072 118.712 22.768C119.96 16.432 121.688 11.2 123.896 7.072C126.104 2.944 128.6 0.879997 131.384 0.879997C132.824 0.879997 133.944 1.488 134.744 2.704C135.576 3.888 135.992 5.6 135.992 7.84C135.992 11.328 135.048 15.216 133.16 19.504C131.304 23.76 128.008 28.24 123.272 32.944C122.984 35.76 122.84 38.496 122.84 41.152C122.84 44.448 122.952 47.824 123.176 51.28C123.4 54.768 123.768 56.512 124.28 56.512C124.76 56.512 125.144 56.112 125.432 55.312C125.72 54.512 125.864 53.248 125.864 51.52C125.864 48.384 125.736 45.616 125.48 43.216C125.256 40.784 124.984 38.832 124.664 37.36C124.6 37.136 124.568 36.8 124.568 36.352C124.568 34.976 125.112 33.84 126.2 32.944C127.32 32.048 128.792 31.584 130.616 31.552H131.768H132.44C133.048 26.24 134.04 21.248 135.416 16.576C136.824 11.872 138.52 8.08 140.504 5.2C142.52 2.32 144.68 0.879997 146.984 0.879997C148.488 0.879997 149.656 1.552 150.488 2.896C151.352 4.24 151.784 6.048 151.784 8.32C151.784 11.136 151.256 14.288 150.2 17.776C149.144 21.264 147.576 24.544 145.496 27.616C143.448 30.656 141 32.944 138.152 34.48C137.928 36.624 137.816 38.848 137.816 41.152C137.816 44.448 137.928 47.824 138.152 51.28C138.376 54.768 138.744 56.512 139.256 56.512C139.736 56.512 140.12 56.112 140.408 55.312C140.696 54.512 140.84 53.248 140.84 51.52C140.84 49.024 140.712 46.64 140.456 44.368C140.2 42.096 139.928 40.24 139.64 38.8C139.576 38.544 139.544 38.192 139.544 37.744C139.544 36.432 139.992 35.328 140.888 34.432C141.784 33.504 142.808 33.04 143.96 33.04C145.048 33.04 146.04 33.008 146.936 32.944C147.864 32.848 148.456 32.784 148.712 32.752C149.8 32.624 150.504 32.56 150.824 32.56ZM130.376 5.632C129.8 5.632 129.112 6.608 128.312 8.56C127.544 10.512 126.776 13.104 126.008 16.336C125.24 19.568 124.584 23.008 124.04 26.656C126.472 23.776 128.296 20.656 129.512 17.296C130.76 13.904 131.384 10.832 131.384 8.08C131.384 7.28 131.288 6.672 131.096 6.256C130.904 5.84 130.664 5.632 130.376 5.632ZM145.976 5.632C145.336 5.632 144.552 6.752 143.624 8.992C142.728 11.232 141.832 14.16 140.936 17.776C140.072 21.392 139.352 25.136 138.776 29.008C140.6 27.568 142.136 25.648 143.384 23.248C144.664 20.848 145.608 18.336 146.216 15.712C146.856 13.088 147.176 10.704 147.176 8.56C147.176 6.608 146.776 5.632 145.976 5.632ZM189.972 35.392C190.388 35.392 190.708 35.6 190.932 36.016C191.188 36.4 191.316 36.896 191.316 37.504C191.316 38.24 191.204 38.816 190.98 39.232C190.756 39.648 190.404 40.016 189.924 40.336C188.036 41.584 185.028 43.632 180.9 46.48C179.652 53.104 178.036 58.32 176.052 62.128C174.068 65.936 171.556 67.84 168.516 67.84C166.884 67.84 165.556 67.328 164.532 66.304C163.508 65.312 162.996 64 162.996 62.368C162.996 60.864 163.332 59.344 164.004 57.808C164.676 56.272 165.924 54.496 167.748 52.48C169.604 50.464 172.212 48.16 175.572 45.568L175.716 44.656C173.188 45.712 170.708 46.24 168.276 46.24C164.692 46.24 161.54 45.552 158.82 44.176C156.1 42.768 153.988 40.784 152.484 38.224C150.98 35.664 150.228 32.688 150.228 29.296C150.228 24.56 151.124 20.384 152.916 16.768C154.708 13.12 157.172 10.304 160.308 8.32C163.476 6.304 167.012 5.296 170.916 5.296C174.66 5.296 177.46 6.176 179.316 7.936C181.204 9.664 182.148 11.968 182.148 14.848C182.148 16.736 181.796 18.256 181.092 19.408C180.42 20.528 179.444 21.088 178.164 21.088C177.3 21.088 176.596 20.88 176.052 20.464C175.54 20.048 175.284 19.472 175.284 18.736C175.284 18.416 175.348 17.872 175.476 17.104C175.668 16.208 175.764 15.504 175.764 14.992C175.764 13.648 175.348 12.608 174.516 11.872C173.716 11.136 172.356 10.768 170.436 10.768C168.1 10.768 165.924 11.44 163.908 12.784C161.924 14.128 160.324 16.144 159.108 18.832C157.892 21.488 157.284 24.688 157.284 28.432C157.284 32.272 158.324 35.248 160.404 37.36C162.516 39.44 165.556 40.48 169.524 40.48C171.732 40.48 174.036 39.984 176.436 38.992L177.108 33.136H172.212C171.316 33.136 170.628 32.928 170.148 32.512C169.668 32.064 169.428 31.344 169.428 30.352C169.428 29.456 169.668 28.752 170.148 28.24C170.628 27.728 171.268 27.472 172.068 27.472H181.044C181.748 27.472 182.324 27.712 182.772 28.192C183.252 28.64 183.444 29.296 183.348 30.16C183.252 31.184 182.932 33.504 182.388 37.12L181.86 40.768C184.42 38.848 186.756 37.184 188.868 35.776C189.284 35.52 189.652 35.392 189.972 35.392ZM169.044 63.184C169.876 63.184 170.788 62.24 171.78 60.352C172.772 58.464 173.7 55.424 174.564 51.232C172.132 53.312 170.372 55.184 169.284 56.848C168.228 58.544 167.7 60.032 167.7 61.312C167.7 62.56 168.148 63.184 169.044 63.184ZM191.259 46.24C190.043 46.24 189.179 45.6 188.667 44.32C188.187 43.04 187.947 40.992 187.947 38.176C187.947 34.016 188.539 30.064 189.723 26.32C190.011 25.392 190.475 24.72 191.115 24.304C191.787 23.856 192.715 23.632 193.899 23.632C194.539 23.632 194.987 23.712 195.243 23.872C195.499 24.032 195.627 24.336 195.627 24.784C195.627 25.296 195.387 26.448 194.907 28.24C194.587 29.52 194.331 30.64 194.139 31.6C193.947 32.56 193.787 33.744 193.659 35.152C194.715 32.4 195.899 30.16 197.211 28.432C198.523 26.704 199.803 25.472 201.051 24.736C202.331 24 203.499 23.632 204.555 23.632C206.635 23.632 207.675 24.672 207.675 26.752C207.675 27.168 207.531 28.176 207.243 29.776C206.987 31.056 206.859 31.856 206.859 32.176C206.859 33.296 207.259 33.856 208.059 33.856C208.955 33.856 210.107 33.152 211.515 31.744C211.931 31.328 212.363 31.12 212.811 31.12C213.227 31.12 213.547 31.312 213.771 31.696C214.027 32.048 214.155 32.528 214.155 33.136C214.155 34.32 213.835 35.248 213.195 35.92C212.299 36.848 211.243 37.648 210.027 38.32C208.843 38.96 207.579 39.28 206.235 39.28C204.539 39.28 203.243 38.848 202.347 37.984C201.483 37.12 201.051 35.952 201.051 34.48C201.051 34 201.099 33.52 201.195 33.04C201.259 32.4 201.291 31.968 201.291 31.744C201.291 31.232 201.115 30.976 200.763 30.976C200.283 30.976 199.643 31.52 198.843 32.608C198.075 33.664 197.307 35.072 196.539 36.832C195.771 38.592 195.147 40.448 194.667 42.4C194.315 43.904 193.899 44.928 193.419 45.472C192.971 45.984 192.251 46.24 191.259 46.24ZM215.599 46.24C213.615 46.24 212.031 45.52 210.847 44.08C209.663 42.64 209.071 40.752 209.071 38.416C209.071 35.856 209.663 33.44 210.847 31.168C212.031 28.864 213.599 27.024 215.551 25.648C217.535 24.24 219.631 23.536 221.839 23.536C222.543 23.536 223.007 23.68 223.231 23.968C223.487 24.224 223.695 24.704 223.855 25.408C224.527 25.28 225.231 25.216 225.967 25.216C227.535 25.216 228.319 25.776 228.319 26.896C228.319 27.568 228.079 29.168 227.599 31.696C226.863 35.376 226.495 37.936 226.495 39.376C226.495 39.856 226.607 40.24 226.831 40.528C227.087 40.816 227.407 40.96 227.791 40.96C228.399 40.96 229.135 40.576 229.999 39.808C230.863 39.008 232.031 37.728 233.503 35.968C233.887 35.52 234.319 35.296 234.799 35.296C235.215 35.296 235.535 35.488 235.759 35.872C236.015 36.256 236.143 36.784 236.143 37.456C236.143 38.736 235.839 39.728 235.231 40.432C233.919 42.064 232.527 43.44 231.055 44.56C229.583 45.68 228.159 46.24 226.783 46.24C225.727 46.24 224.751 45.888 223.855 45.184C222.991 44.448 222.335 43.456 221.887 42.208C220.223 44.896 218.127 46.24 215.599 46.24ZM217.327 41.392C218.031 41.392 218.703 40.976 219.343 40.144C219.983 39.312 220.447 38.208 220.735 36.832L222.511 28C221.167 28.032 219.919 28.544 218.767 29.536C217.647 30.496 216.751 31.776 216.079 33.376C215.407 34.976 215.071 36.672 215.071 38.464C215.071 39.456 215.263 40.192 215.647 40.672C216.063 41.152 216.623 41.392 217.327 41.392ZM235.65 46.24C234.434 46.24 233.57 45.6 233.058 44.32C232.578 43.04 232.338 40.992 232.338 38.176C232.338 34.016 232.93 30.064 234.114 26.32C234.402 25.392 234.866 24.72 235.506 24.304C236.178 23.856 237.106 23.632 238.29 23.632C238.93 23.632 239.378 23.712 239.634 23.872C239.89 24.032 240.018 24.336 240.018 24.784C240.018 25.296 239.778 26.448 239.298 28.24C238.978 29.52 238.722 30.64 238.53 31.6C238.338 32.528 238.178 33.696 238.05 35.104C238.914 32.608 239.938 30.496 241.122 28.768C242.338 27.04 243.57 25.76 244.818 24.928C246.098 24.064 247.298 23.632 248.418 23.632C249.538 23.632 250.322 23.888 250.77 24.4C251.25 24.912 251.49 25.696 251.49 26.752C251.49 27.776 251.186 29.632 250.578 32.32C250.322 33.472 250.146 34.336 250.05 34.912C251.106 32.224 252.274 30.032 253.554 28.336C254.866 26.64 256.146 25.44 257.394 24.736C258.642 24 259.794 23.632 260.85 23.632C261.874 23.632 262.642 23.904 263.154 24.448C263.698 24.96 263.97 25.728 263.97 26.752C263.97 27.584 263.794 29.152 263.442 31.456C263.122 33.408 262.866 35.264 262.674 37.024C262.482 38.752 262.386 40.688 262.386 42.832C262.386 44.048 262.13 44.928 261.618 45.472C261.138 45.984 260.338 46.24 259.218 46.24C258.162 46.24 257.394 45.968 256.914 45.424C256.434 44.88 256.194 44.064 256.194 42.976C256.194 41.696 256.418 39.584 256.866 36.64C257.25 34.08 257.442 32.448 257.442 31.744C257.442 31.232 257.266 30.976 256.914 30.976C256.498 30.976 255.906 31.52 255.138 32.608C254.37 33.664 253.602 35.072 252.834 36.832C252.066 38.592 251.442 40.448 250.962 42.4C250.61 43.936 250.194 44.96 249.714 45.472C249.266 45.984 248.53 46.24 247.506 46.24C246.45 46.24 245.65 45.744 245.106 44.752C244.594 43.728 244.338 42.496 244.338 41.056C244.338 39.84 244.498 38.08 244.818 35.776C245.074 33.728 245.202 32.384 245.202 31.744C245.202 31.232 245.026 30.976 244.674 30.976C244.194 30.976 243.586 31.552 242.85 32.704C242.114 33.856 241.394 35.328 240.69 37.12C240.018 38.912 239.474 40.672 239.058 42.4C238.706 43.904 238.29 44.928 237.81 45.472C237.362 45.984 236.642 46.24 235.65 46.24Z" fill="black"/>
        </svg>
    );
}

export default Logo;