import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'
import getSettings from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings'
import getLayout from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout'
import getPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages'
import getBlogPosts from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts'
import getExtraPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages'
import getWidgets from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets'

//ALPIX CUSTOM MODULES
const animations = [
  "backInDown",
  "backInLeft",
  "backInRight",
  "backInUp",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeInTopLeft",
  "fadeInTopRight",
  "fadeInBottomLeft",
  "fadeInBottomRight",
  "lightSpeedInRight",
  "lightSpeedInLeft",
  "lightSpeedOutRight",
  "lightSpeedOutLeft",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp"
]


const spacer = [
  {
    label: 'Visível em...',
    name: 'visibility',
    widget: 'select',
    required: false,
    default:'d-block d-md-block',
    options: [
      {
        label: 'Todos os ambientes',
        value: "d-block d-md-block"
      },
      {
        label: 'Apenas Desktop',
        value: "d-none d-md-block"
      },
      {
        label: 'Apenas Mobile',
        value: "d-block d-md-none"
      },
    ]
  },
  {
    label: 'Espaçamento da Sessão',
    name: 'spacing',
    widget: 'object',
    fields: [
      {
        label: 'Container',
        required: false,
        name: 'container',
        widget: 'select',
        options: ["container","container-fluid","container_90"]
      },
      {
        label: 'Desktop',
        name: 'desktop',
        widget: 'object',
        required: false,
        fields: [
          {
            label: 'Margem Superior',
            
            name: 'margin_top',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },  
          {
            label: 'Margem Inferior',
            
            name: 'margin_bottom',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },  
          {
            label: 'Espaçamento Superior',
            
            name: 'padding_top',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },  
          {
            label: 'Espaçamento Inferior',
            
            name: 'padding_bottom',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },
        ]
      },
      {
        label: 'Mobile',
        name: 'mobile',
        widget: 'object',
        required: false,
        fields: [
          {
            label: 'Margem Superior',
            name: 'margin_top',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },  
          {
            label: 'Margem Inferior',
            
            name: 'margin_bottom',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },  
          {
            label: 'Espaçamento Superior',
            
            name: 'padding_top',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },  
          {
            label: 'Espaçamento Inferior',
            
            name: 'padding_bottom',
            widget: 'select',
            required: false,
            options: ["0","1","2","3","4","5"]
          },
        ]
      },
    ]
  }, 
];

const bannerFields = [
  {
    label: 'Desktop',
    name: 'desktop',
    widget: 'object',
    required: false,
    fields: [
      {
        label: 'Imagem',
        name: 'img',
        widget: 'image'
      },
      {
        label: 'Link',
        required: false,
        name: 'link',
        widget: 'string'
      },
      {
        label: 'Alt',
        required: false,
        name: 'alt',
        widget: 'string'
      },
      
      {
        label: 'Título',
        required: false,
        name: 'title',
        widget: 'string'
      },
      {
        label: 'Cor do título',
        required: false,
        name: 'title_color',
        widget: 'color'
      },
      {
        label: 'Descrição',
        required: false,
        name: 'description',
        widget: 'string'
      },
      
      {
        label: 'Cor da descrição',
        required: false,
        name: 'description_color',
        widget: 'color'
      },
      
      {
        label: 'Transparência da Máscara',
        name: 'mask_opacity',
        hint: 'De 0 até 10. 0 é transparente e 10 é totalmente opaco.',
        required: false,
        min: 0,
        max:10,
        default:0,    
        widget: 'number'
      },
      {
        label: 'Cor da Máscara',
        required: false,
        name: 'mask_color',
        widget: 'color'
      },      
      {
        label: 'Posição do conteúdo',
        required: false,
        name: 'content_position',
        widget: 'select',
        options: ["top_left","top_center","top_right","center_left","center_center","center_right","bottom_left","bottom_center","bottom_right"]
      },
      {
        label: 'Ordem de conteúdo',
        required: false,
        name: 'content_order',
        widget: 'select',
        options: ["before_image","inside_image","after_image","left_image","right_image"]
      },  
      {
        label: 'Animação',
        required: false,
        name: 'animate',
        widget: 'select',
        options: animations
      },
      {
        label: 'Texto do botão [Principal]',
        required: false,
        name: 'btn_text',
        widget: 'string'
      },
      {
        label: 'URL do botão [Principal]',
        required: false,
        name: 'btn_url',
        widget: 'string'
      },
      {
        label: 'Cor do texto do botão [Principal]',
        required: false,
        name: 'btn_text_color',
        widget: 'color'
      },
      {
        label: 'Cor de fundo do botão [Principal]',
        required: false,
        name: 'btn_background',
        widget: 'color'
      },      
      
      {
        label: 'Texto do botão [Secundário]',
        required: false,
        name: 'btn_text_2',
        widget: 'string'
      },
      
      {
        label: 'URL do botão [Secundário]',
        required: false,
        name: 'btn_url_2',
        widget: 'string'
      },
      {
        label: 'Cor do texto do botão [Secundário]',
        required: false,
        name: 'btn_text_color_2',
        widget: 'color'
      },
      {
        label: 'Cor do fundo do botão [Secundário]',
        required: false,
        name: 'btn_background_2',
        widget: 'color'
      },      
      
    ]
  },
  {
    label: 'Mobile',
    name: 'mobile',
    widget: 'object',
    required: false,
    fields: [
      {
        label: 'Imagem',
        name: 'img',
        widget: 'image',
        required:false
      },
      {
        label: 'Link',
        required: false,
        name: 'link',
        widget: 'string'
      },
      {
        label: 'Alt',
        required: false,
        name: 'alt',
        widget: 'string'
      },
      
      {
        label: 'Título',
        required: false,
        name: 'title',
        widget: 'string'
      },
      {
        label: 'Cor do título',
        required: false,
        name: 'title_color',
        widget: 'color'
      },
      {
        label: 'Descrição',
        required: false,
        name: 'description',
        widget: 'string'
      },
      
      {
        label: 'Cor da descrição',
        required: false,
        name: 'description_color',
        widget: 'color'
      },
      
      {
        label: 'Transparência da Máscara',
        name: 'mask_opacity',
        hint: 'De 0 até 10. 0 é transparente e 10 é totalmente opaco.',
        min: 0,
        max:10,
        default:0,    
        widget: 'number',
        required: false,
      },
      {
        label: 'Cor da Máscara',
        required: false,
        name: 'mask_color',
        widget: 'color'
      },      
      {
        label: 'Posição do conteúdo',
        required: false,
        name: 'content_position',
        widget: 'select',
        options: ["top_left","top_center","top_right","center_left","center_center","center_right","bottom_left","bottom_center","bottom_right"]
      },
      {
        label: 'Ordem de conteúdo',
        required: false,
        name: 'content_order',
        widget: 'select',
        options: ["before_image","inside_image","after_image","left_image","right_image"]
      },  
      {
        label: 'Animação',
        required: false,
        name: 'animate',
        widget: 'select',
        options: animations
      },
      {
        label: 'Texto do botão [Principal]',
        required: false,
        name: 'btn_text',
        widget: 'string'
      },
      {
        label: 'URL do botão [Principal]',
        required: false,
        name: 'btn_url',
        widget: 'string'
      },
      {
        label: 'Cor do texto do botão [Principal]',
        required: false,
        name: 'btn_text_color',
        widget: 'color'
      },
      {
        label: 'Cor de fundo do botão [Principal]',
        required: false,
        name: 'btn_background',
        widget: 'color'
      },      
      
      {
        label: 'Texto do botão [Secundário]',
        required: false,
        name: 'btn_text_2',
        widget: 'string'
      },
      
      {
        label: 'URL do botão [Secundário]',
        required: false,
        name: 'btn_url_2',
        widget: 'string'
      },
      {
        label: 'Cor do texto do botão [Secundário]',
        required: false,
        name: 'btn_text_color_2',
        widget: 'color'
      },
      {
        label: 'Cor do fundo do botão [Secundário]',
        required: false,
        name: 'btn_background_2',
        widget: 'color'
      },            
    ]
  }
]


export default options => {
  options.sections = getSections(options).concat([
    {
      label: '[ALPIX] - Depoimentos',
      name: 'apx_testimonials',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Depoimentos',
          name: 'testimonials',
          widget: 'list',
          required:false,
          fields: [
            {
              label: 'Depoimento',
              name: 'testimonial',
              widget: 'object',
              required:false,
              fields: [
                {
                  label: 'Nome do Cliente',
                  name: 'name',
                  widget: 'string'          
                },
                {
                  label: 'Depoimento',
                  name: 'text',
                  widget: 'string'          
                },
                {
                  label: 'Foto do Cliente',
                  name: 'image',
                  widget: 'image',
                  required: false    
                },                
              ]
            },          
          ]
        },        
      ]
    },
    {
      label: '[ALPIX] - FAQ',
      name: 'apx_faq',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Posição da descrição',
          required: false,
          name: 'list',
          widget: 'select',
          options: ["description_first","description_last"]
        },        
        {
          label: 'Perguntas',
          name: 'questions',
          widget: 'list',
          required:false,
          fields: [
            {
              label: 'Pergunta',
              name: 'question',
              widget: 'object',
              required:false,
              fields: [
                {
                  label: 'Pergunta',
                  name: 'title',
                  widget: 'string',
                  required: false         
                },
                {
                  label: 'Resposta',
                  name: 'response',
                  widget: 'string',
                  required: false            
                }              
              ]
            },          
          ]
        },        
      ]
    },
    {
      label: '[ALPIX] - Newsletter',
      name: 'apx_newsletter',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Posição da descrição',
          required: false,
          name: 'list',
          widget: 'select',
          options: ["description_first","description_last"]
        },        
        {
          label: 'Texto do botão',
          required: false,
          name: 'btn_text',
          widget: 'text'
        },  
        {
          label: 'Placeholder do campo',
          required: false,
          name: 'input_placeholder',
          widget: 'text'
        }  
      ]
    },
    {
      label: '[ALPIX] - Tarja de Vantagens',
      name: 'apx_banners-stripe',
      widget: 'object',
      fields: [
        {
          label: 'Cor do título',
          required: false,
          name: 'title_color',
          widget: 'color'
        },
        {
          label: 'Cor da descrição',
          required: false,
          name: 'description_color',
          widget: 'color'
        },
        {
          label: 'Animado',
          required: false,
          name: 'animation',
          widget: 'boolean',
          default:false
        },
        {
          label: 'Lista',
          name: 'list',
          widget: 'list',
          fields: [
            {
              label: 'Imagem',
              name: 'img',
              widget: 'image'
            },
            {
              label: 'Link',
              required: false,
              name: 'link',
              widget: 'string'
            },
            {
              label: 'Título',
              required: false,
              name: 'title',
              widget: 'string'
            },
            
            {
              label: 'Descrição',
              required: false,
              name: 'description',
              widget: 'string'
            },
            
          ]
        }
      ]
    },
    
    {
      label: '[ALPIX] - Lista de Itens com Imagens',
      name: 'apx_list-images',
      widget: 'object',
      fields: [
        ...spacer, 
        {
          label: 'Título da Sessão',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'string'
        },
        {
          label: 'Link da Sessão',
          required: false,
          name: 'link',
          widget: 'string'
        },        
        {
          label: 'Itens',
          name: 'banners',
          widget: 'list',
          fields: [
            {
              label: 'Título',
              required: false,
              name: 'title',
              widget: 'string'
            },                     
            {
              label: 'Link',
              required: false,
              name: 'link',
              widget: 'string'
            },
            {
              label: 'Imagem',
              name: 'img',
              widget: 'image'
            }
            
          ]
        }
      ]
    },
])

  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      getSettings(options),
      getLayout(options),
      getPages(options),
      getBlogPosts(options),
      //getReceitas(options),
      //getGrids(options),
      //getMenuConfig(options),
      getExtraPages(options),
      getWidgets(options),
      
      {
        label: "[alpix.dev]",
        name: "alpix",
        editor: {
            preview: false
        },
        files: [
          {
              name: "popup",
              label: "Popup",
              file: "content/apx_popup.json",
              editor: {
                  preview: false
              },
              fields: [
                  {
                      label: "Imagem",
                      name: "image",
                      widget: "image",
                      required: false
                  },
                  {
                      label: "Título",
                      name: "title",
                      widget: "string"
                  },
                  {
                      label: "Texto",
                      name: "description",
                      widget: "string"
                  },
                  {
                      label: "HTML",
                      hint:"Pode ser de um formulário ou algum script qualquer",
                      name: "code",
                      widget: "code"
                  }           
              ]
          },
        ]
      }      
    ]
  }
}
