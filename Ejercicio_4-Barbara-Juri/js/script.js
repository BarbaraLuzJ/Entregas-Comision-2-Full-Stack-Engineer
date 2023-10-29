class ProgramaCargaImagenes {
  constructor() {
    this.dropContainers = [
      document.querySelectorAll('div')[0],
      document.querySelectorAll('div')[1],
      document.querySelectorAll('div')[2]
    ];
    this.imageInputs = [
      document.getElementById('zona1'),
      document.getElementById('zona2'),
      document.getElementById('zona3')
    ];

    this.setupEventListeners();
  }

  mostrarCargando(drop) {
    drop.innerHTML = 'Cargando...';
  }

  cargarImagen(imagen, drop) {
    return new Promise((resolve, reject) => {
      this.mostrarCargando(drop);

      setTimeout(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', imagen + '?' + Date.now());
        xhr.responseType = 'blob';

        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            let imagenBlob = xhr.response;
            const url = URL.createObjectURL(imagenBlob);
            drop.innerHTML = '<img src="' + url + '" alt="">';

            const image = drop.querySelector('img');

            image.removeEventListener('click', this.manejoClick);

            this.manejoClick = () => {
              image.removeEventListener('click', this.manejoClick);
              this.cargarDesdeInputFile(drop);
            };

            image.addEventListener('click', this.manejoClick);

            resolve(url);
          } else {
            drop.innerHTML = 'Error al cargar la imagen';
            reject(new Error('No se pudo cargar la imagen'));
          }
        });

        xhr.addEventListener('error', () => {
          drop.innerHTML = 'Error de red al cargar la imagen';
          reject(new Error('Error de red al cargar la imagen'));
        });

        xhr.send();
      }, 2000);
    });
  }


  cargarDesdeInputFile(drop) {
    const index = this.dropContainers.indexOf(drop);
    const input = this.imageInputs[index];
    input.click();
  }

  async cargarFile(zonas, drop) {
    zonas.addEventListener('change', async () => {
      if (zonas.files.length > 0) {
        const imagen = zonas.files[0].name;
        try {
          const url = await this.cargarImagen(imagen, drop);
          console.log('Imagen cargada:', url);
        } catch (error) {
          console.error('Error al cargar la imagen:', error);
        }
      }
    });
  }

  async dropImage(drop) {
    drop.addEventListener('drop', async (e) => {
      e.preventDefault();
      const imagen = e.dataTransfer.files[0].name;
      try {
        const url = await this.cargarImagen(imagen, drop);
        console.log('Imagen cargada:', url);
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
      }
    });
  }

  setupEventListeners() {
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((event) => {
      document.addEventListener(event, (e) => e.preventDefault());
    });

    this.dropContainers.forEach((drop) => {
      this.dropImage(drop);
      this.cargarFile(this.imageInputs[this.dropContainers.indexOf(drop)], drop);
    });
  }
}

const programa = new ProgramaCargaImagenes();

  
  
  