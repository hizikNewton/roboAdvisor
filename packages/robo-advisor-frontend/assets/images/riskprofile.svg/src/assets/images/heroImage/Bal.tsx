import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={386}
    height={93}
    fill="none"
    {...props}
  >
    <Rect width={386} height={93} fill="#D8FCEC" rx={6} />
    <Rect
      width={40}
      height={40}
      x={20}
      y={32.5}
      fill="#163D2A"
      fillOpacity={0.15}
      rx={20}
    />
    <Path
      stroke="#163D2A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M45.033 53.792c-.35.341-.55.833-.5 1.358.075.9.9 1.559 1.8 1.559h1.584v.991a3.14 3.14 0 0 1-3.134 3.133h-9.566a3.14 3.14 0 0 1-3.134-3.133v-5.608a3.14 3.14 0 0 1 3.134-3.133h9.566a3.14 3.14 0 0 1 3.134 3.133v1.2h-1.684c-.466 0-.891.183-1.2.5Z"
    />
    <Path
      stroke="#163D2A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M32.083 52.842v-3.809c0-.991.608-1.875 1.534-2.225l6.616-2.5a1.584 1.584 0 0 1 2.142 1.484v3.166M48.8 54.142v1.717a.856.856 0 0 1-.834.85h-1.633c-.9 0-1.725-.659-1.8-1.559-.05-.525.15-1.016.5-1.358a1.66 1.66 0 0 1 1.2-.5h1.733a.856.856 0 0 1 .833.85ZM35.833 52.5h5.834"
    />
    <Path
      fill="#828282"
      d="M82.072 24.636v.888h-2.28V33H78.7v-7.476h-2.292v-.888h5.664Zm4.212 8.472a3.4 3.4 0 0 1-1.68-.42 3.053 3.053 0 0 1-1.176-1.188c-.28-.52-.42-1.12-.42-1.8 0-.672.144-1.264.432-1.776.296-.52.696-.916 1.2-1.188a3.424 3.424 0 0 1 1.692-.42c.624 0 1.188.14 1.692.42.504.272.9.664 1.188 1.176.296.512.444 1.108.444 1.788 0 .68-.152 1.28-.456 1.8a3.09 3.09 0 0 1-1.212 1.188c-.512.28-1.08.42-1.704.42Zm0-.96c.392 0 .76-.092 1.104-.276.344-.184.62-.46.828-.828.216-.368.324-.816.324-1.344 0-.528-.104-.976-.312-1.344a2.003 2.003 0 0 0-.816-.816 2.237 2.237 0 0 0-1.092-.276c-.4 0-.768.092-1.104.276a1.951 1.951 0 0 0-.792.816c-.2.368-.3.816-.3 1.344 0 .536.096.988.288 1.356.2.368.464.644.792.828.328.176.688.264 1.08.264Zm6.14-4.824V31.2c0 .32.068.548.204.684.136.128.372.192.708.192h.804V33h-.984c-.608 0-1.064-.14-1.368-.42-.304-.28-.456-.74-.456-1.38v-3.876h-.852v-.9h.852v-1.656h1.092v1.656h1.716v.9h-1.716Zm2.631 2.364c0-.672.136-1.26.408-1.764a2.964 2.964 0 0 1 1.116-1.188 3.11 3.11 0 0 1 1.596-.42c.576 0 1.076.124 1.5.372.424.248.74.56.948.936v-1.2h1.104V33h-1.104v-1.224c-.216.384-.54.704-.972.96-.424.248-.92.372-1.488.372a2.98 2.98 0 0 1-1.584-.432 3.03 3.03 0 0 1-1.116-1.212c-.272-.52-.408-1.112-.408-1.776Zm5.568.012c0-.496-.1-.928-.3-1.296a2.065 2.065 0 0 0-.816-.84 2.14 2.14 0 0 0-1.116-.3c-.408 0-.78.096-1.116.288a2.09 2.09 0 0 0-.804.84c-.2.368-.3.8-.3 1.296 0 .504.1.944.3 1.32.2.368.468.652.804.852a2.21 2.21 0 0 0 1.116.288c.408 0 .78-.096 1.116-.288.344-.2.616-.484.816-.852.2-.376.3-.812.3-1.308Zm4.041-5.58V33h-1.092v-8.88h1.092Zm7.713 8.964a3.685 3.685 0 0 1-1.488-.288 2.542 2.542 0 0 1-1.02-.816 2.119 2.119 0 0 1-.384-1.212h1.164c.04.392.2.724.48.996.288.264.704.396 1.248.396.52 0 .928-.128 1.224-.384.304-.264.456-.6.456-1.008 0-.32-.088-.58-.264-.78a1.687 1.687 0 0 0-.66-.456c-.264-.104-.62-.216-1.068-.336a9.703 9.703 0 0 1-1.332-.432 2.212 2.212 0 0 1-.852-.672c-.232-.312-.348-.728-.348-1.248 0-.456.116-.86.348-1.212.232-.352.556-.624.972-.816.424-.192.908-.288 1.452-.288.784 0 1.424.196 1.92.588.504.392.788.912.852 1.56h-1.2c-.04-.32-.208-.6-.504-.84-.296-.248-.688-.372-1.176-.372-.456 0-.828.12-1.116.36-.288.232-.432.56-.432.984 0 .304.084.552.252.744.176.192.388.34.636.444.256.096.612.208 1.068.336.552.152.996.304 1.332.456.336.144.624.372.864.684.24.304.36.72.36 1.248 0 .408-.108.792-.324 1.152-.216.36-.536.652-.96.876-.424.224-.924.336-1.5.336Zm3.983-3.396c0-.672.136-1.26.408-1.764a2.964 2.964 0 0 1 1.116-1.188 3.11 3.11 0 0 1 1.596-.42c.576 0 1.076.124 1.5.372.424.248.74.56.948.936v-1.2h1.104V33h-1.104v-1.224c-.216.384-.54.704-.972.96-.424.248-.92.372-1.488.372a2.98 2.98 0 0 1-1.584-.432 3.03 3.03 0 0 1-1.116-1.212c-.272-.52-.408-1.112-.408-1.776Zm5.568.012c0-.496-.1-.928-.3-1.296a2.065 2.065 0 0 0-.816-.84 2.14 2.14 0 0 0-1.116-.3c-.408 0-.78.096-1.116.288a2.09 2.09 0 0 0-.804.84c-.2.368-.3.8-.3 1.296 0 .504.1.944.3 1.32.2.368.468.652.804.852a2.21 2.21 0 0 0 1.116.288c.408 0 .78-.096 1.116-.288.344-.2.616-.484.816-.852.2-.376.3-.812.3-1.308Zm5.397 2.292 2.04-5.568h1.164L127.949 33h-1.272l-2.58-6.576h1.176l2.052 5.568Zm4.843-6.636a.718.718 0 0 1-.528-.216.718.718 0 0 1-.216-.528c0-.208.072-.384.216-.528a.718.718 0 0 1 .528-.216c.2 0 .368.072.504.216.144.144.216.32.216.528a.718.718 0 0 1-.216.528.666.666 0 0 1-.504.216Zm.528 1.068V33h-1.092v-6.576h1.092Zm5.065-.12c.8 0 1.448.244 1.944.732.496.48.744 1.176.744 2.088V33h-1.08v-3.72c0-.656-.164-1.156-.492-1.5-.328-.352-.776-.528-1.344-.528-.576 0-1.036.18-1.38.54-.336.36-.504.884-.504 1.572V33h-1.092v-6.576h1.092v.936c.216-.336.508-.596.876-.78a2.774 2.774 0 0 1 1.236-.276Zm7.184.012c.568 0 1.064.124 1.488.372.432.248.752.56.96.936v-1.2h1.104v6.72c0 .6-.128 1.132-.384 1.596-.256.472-.624.84-1.104 1.104-.472.264-1.024.396-1.656.396-.864 0-1.584-.204-2.16-.612a2.392 2.392 0 0 1-1.02-1.668h1.08c.12.4.368.72.744.96.376.248.828.372 1.356.372.6 0 1.088-.188 1.464-.564.384-.376.576-.904.576-1.584v-1.38a2.628 2.628 0 0 1-.96.96c-.424.256-.92.384-1.488.384a3.043 3.043 0 0 1-1.596-.432 3.03 3.03 0 0 1-1.116-1.212c-.272-.52-.408-1.112-.408-1.776 0-.672.136-1.26.408-1.764a2.964 2.964 0 0 1 1.116-1.188 3.11 3.11 0 0 1 1.596-.42Zm2.448 3.384c0-.496-.1-.928-.3-1.296a2.065 2.065 0 0 0-.816-.84 2.14 2.14 0 0 0-1.116-.3c-.408 0-.78.096-1.116.288a2.09 2.09 0 0 0-.804.84c-.2.368-.3.8-.3 1.296 0 .504.1.944.3 1.32.2.368.468.652.804.852a2.21 2.21 0 0 0 1.116.288c.408 0 .78-.096 1.116-.288.344-.2.616-.484.816-.852.2-.376.3-.812.3-1.308Z"
    />
    <Path
      fill="#141414"
      d="M90.144 69.852a4.87 4.87 0 0 1-.65 2.444c-.416.763-1.04 1.404-1.872 1.924-.815.52-1.785.832-2.912.936v2.106h-1.69v-2.106c-1.63-.156-2.947-.667-3.952-1.534s-1.508-2.01-1.508-3.432h3.172c.052.676.269 1.24.65 1.69.381.433.927.71 1.638.832v-5.72c-1.161-.295-2.106-.59-2.834-.884a4.745 4.745 0 0 1-1.872-1.456c-.503-.659-.754-1.56-.754-2.704 0-1.439.503-2.626 1.508-3.562 1.005-.953 2.323-1.508 3.952-1.664v-2.106h1.69v2.106c1.525.139 2.747.624 3.666 1.456.936.815 1.465 1.941 1.586 3.38H86.79a2.489 2.489 0 0 0-.624-1.43c-.364-.433-.85-.728-1.456-.884v5.616c1.161.277 2.106.572 2.834.884a4.348 4.348 0 0 1 1.846 1.43c.503.641.754 1.534.754 2.678Zm-9.568-8.06c0 .71.208 1.265.624 1.664.433.399 1.04.72 1.82.962v-5.252c-.745.087-1.343.355-1.794.806-.433.45-.65 1.057-.65 1.82Zm4.134 10.92c.763-.121 1.36-.425 1.794-.91.433-.503.65-1.1.65-1.794 0-.693-.217-1.23-.65-1.612-.416-.399-1.014-.72-1.794-.962v5.278Zm9.396-1.664v-2.236l8.736-12.532h3.588v12.194h2.418v2.574h-2.418V75h-2.912v-3.952h-9.412Zm9.542-11.752-6.136 9.178h6.136v-9.178Zm11.348 10.556c.173.867.546 1.525 1.118 1.976.572.45 1.343.676 2.314.676 1.231 0 2.132-.485 2.704-1.456.572-.97.858-2.626.858-4.966-.416.59-1.005 1.049-1.768 1.378a6.265 6.265 0 0 1-2.444.468c-1.127 0-2.149-.225-3.068-.676a5.298 5.298 0 0 1-2.184-2.054c-.52-.919-.78-2.028-.78-3.328 0-1.907.555-3.423 1.664-4.55 1.127-1.144 2.669-1.716 4.628-1.716 2.357 0 4.03.789 5.018 2.366 1.005 1.56 1.508 3.96 1.508 7.202 0 2.236-.191 4.065-.572 5.486-.364 1.421-1.005 2.496-1.924 3.224-.919.728-2.193 1.092-3.822 1.092-1.855 0-3.285-.485-4.29-1.456-1.005-.97-1.569-2.193-1.69-3.666h2.73Zm3.302-4.42c1.04 0 1.855-.32 2.444-.962.607-.659.91-1.525.91-2.6 0-1.196-.321-2.123-.962-2.782-.624-.676-1.482-1.014-2.574-1.014-1.092 0-1.959.347-2.6 1.04-.624.676-.936 1.569-.936 2.678 0 1.057.303 1.933.91 2.626.624.676 1.56 1.014 2.808 1.014Zm12.708-.338c-1.803-.901-2.704-2.323-2.704-4.264 0-.936.234-1.794.702-2.574.468-.78 1.17-1.395 2.106-1.846.936-.468 2.08-.702 3.432-.702 1.335 0 2.47.234 3.406.702.953.45 1.664 1.066 2.132 1.846a4.91 4.91 0 0 1 .702 2.574c0 .97-.251 1.829-.754 2.574a4.86 4.86 0 0 1-1.95 1.69c.988.364 1.768.962 2.34 1.794.572.815.858 1.777.858 2.886 0 1.127-.286 2.123-.858 2.99-.572.867-1.369 1.534-2.392 2.002-1.023.468-2.184.702-3.484.702-1.3 0-2.461-.234-3.484-.702-1.005-.468-1.794-1.135-2.366-2.002-.572-.867-.858-1.863-.858-2.99 0-1.127.286-2.097.858-2.912.572-.815 1.343-1.404 2.314-1.768Zm6.942-3.9c0-.97-.303-1.716-.91-2.236-.607-.52-1.439-.78-2.496-.78-1.04 0-1.863.26-2.47.78-.607.52-.91 1.274-.91 2.262 0 .867.312 1.577.936 2.132.641.537 1.456.806 2.444.806s1.803-.277 2.444-.832c.641-.555.962-1.265.962-2.132Zm-3.406 5.2c-1.144 0-2.08.286-2.808.858-.711.555-1.066 1.36-1.066 2.418 0 .988.347 1.794 1.04 2.418.693.607 1.638.91 2.834.91 1.179 0 2.106-.312 2.782-.936.693-.624 1.04-1.421 1.04-2.392 0-1.04-.355-1.846-1.066-2.418-.693-.572-1.612-.858-2.756-.858Zm13.486 5.044-3.146 7.176h-1.924l1.846-7.176h3.224Zm2.2-6.162c0-2.999.503-5.339 1.508-7.02 1.023-1.699 2.773-2.548 5.252-2.548 2.479 0 4.221.85 5.226 2.548 1.023 1.681 1.534 4.021 1.534 7.02 0 3.033-.511 5.408-1.534 7.124-1.005 1.699-2.747 2.548-5.226 2.548s-4.229-.85-5.252-2.548c-1.005-1.716-1.508-4.09-1.508-7.124Zm10.608 0c0-1.404-.095-2.591-.286-3.562-.173-.97-.537-1.76-1.092-2.366-.555-.624-1.378-.936-2.47-.936-1.092 0-1.915.312-2.47.936-.555.607-.927 1.395-1.118 2.366-.173.97-.26 2.158-.26 3.562 0 1.456.087 2.678.26 3.666.173.988.537 1.785 1.092 2.392.572.607 1.404.91 2.496.91s1.915-.303 2.47-.91c.572-.607.945-1.404 1.118-2.392.173-.988.26-2.21.26-3.666Zm9.74 4.576c.174.867.546 1.525 1.118 1.976.572.45 1.344.676 2.314.676 1.231 0 2.132-.485 2.704-1.456.572-.97.858-2.626.858-4.966-.416.59-1.005 1.049-1.768 1.378a6.265 6.265 0 0 1-2.444.468c-1.126 0-2.149-.225-3.068-.676a5.31 5.31 0 0 1-2.184-2.054c-.52-.919-.78-2.028-.78-3.328 0-1.907.555-3.423 1.664-4.55 1.127-1.144 2.67-1.716 4.628-1.716 2.358 0 4.03.789 5.018 2.366 1.006 1.56 1.508 3.96 1.508 7.202 0 2.236-.19 4.065-.572 5.486-.364 1.421-1.005 2.496-1.924 3.224-.918.728-2.192 1.092-3.822 1.092-1.854 0-3.284-.485-4.29-1.456-1.005-.97-1.568-2.193-1.69-3.666h2.73Zm3.302-4.42c1.04 0 1.855-.32 2.444-.962.607-.659.91-1.525.91-2.6 0-1.196-.32-2.123-.962-2.782-.624-.676-1.482-1.014-2.574-1.014-1.092 0-1.958.347-2.6 1.04-.624.676-.936 1.569-.936 2.678 0 1.057.304 1.933.91 2.626.624.676 1.56 1.014 2.808 1.014Zm12.708-.338c-1.803-.901-2.704-2.323-2.704-4.264 0-.936.234-1.794.702-2.574.468-.78 1.17-1.395 2.106-1.846.936-.468 2.08-.702 3.432-.702 1.335 0 2.47.234 3.406.702.953.45 1.664 1.066 2.132 1.846a4.91 4.91 0 0 1 .702 2.574c0 .97-.251 1.829-.754 2.574a4.86 4.86 0 0 1-1.95 1.69c.988.364 1.768.962 2.34 1.794.572.815.858 1.777.858 2.886 0 1.127-.286 2.123-.858 2.99-.572.867-1.369 1.534-2.392 2.002-1.023.468-2.184.702-3.484.702-1.3 0-2.461-.234-3.484-.702-1.005-.468-1.794-1.135-2.366-2.002-.572-.867-.858-1.863-.858-2.99 0-1.127.286-2.097.858-2.912.572-.815 1.343-1.404 2.314-1.768Zm6.942-3.9c0-.97-.303-1.716-.91-2.236-.607-.52-1.439-.78-2.496-.78-1.04 0-1.863.26-2.47.78-.607.52-.91 1.274-.91 2.262 0 .867.312 1.577.936 2.132.641.537 1.456.806 2.444.806s1.803-.277 2.444-.832c.641-.555.962-1.265.962-2.132Zm-3.406 5.2c-1.144 0-2.08.286-2.808.858-.711.555-1.066 1.36-1.066 2.418 0 .988.347 1.794 1.04 2.418.693.607 1.638.91 2.834.91 1.179 0 2.106-.312 2.782-.936.693-.624 1.04-1.421 1.04-2.392 0-1.04-.355-1.846-1.066-2.418-.693-.572-1.612-.858-2.756-.858Z"
    />
    <Path
      fill="#828282"
      d="M199.892 75.084a.839.839 0 0 1-.616-.252.838.838 0 0 1-.252-.616c0-.243.084-.448.252-.616a.839.839 0 0 1 .616-.252c.234 0 .43.084.588.252a.838.838 0 0 1 .252.616.838.838 0 0 1-.252.616.775.775 0 0 1-.588.252Zm2.324-5.25c0-1.605.261-2.856.784-3.752.522-.905 1.437-1.358 2.744-1.358 1.297 0 2.207.453 2.73 1.358.522.896.784 2.147.784 3.752 0 1.633-.262 2.903-.784 3.808-.523.905-1.433 1.358-2.73 1.358-1.307 0-2.222-.453-2.744-1.358-.523-.905-.784-2.175-.784-3.808Zm5.782 0c0-.812-.056-1.498-.168-2.058-.103-.57-.322-1.027-.658-1.372-.327-.345-.803-.518-1.428-.518-.635 0-1.12.173-1.456.518-.327.345-.546.803-.658 1.372-.103.56-.154 1.246-.154 2.058 0 .84.051 1.545.154 2.114.112.57.331 1.027.658 1.372.336.345.821.518 1.456.518.625 0 1.101-.173 1.428-.518.336-.345.555-.803.658-1.372.112-.57.168-1.274.168-2.114Zm3.009 0c0-1.605.261-2.856.784-3.752.522-.905 1.437-1.358 2.744-1.358 1.297 0 2.207.453 2.73 1.358.522.896.784 2.147.784 3.752 0 1.633-.262 2.903-.784 3.808-.523.905-1.433 1.358-2.73 1.358-1.307 0-2.222-.453-2.744-1.358-.523-.905-.784-2.175-.784-3.808Zm5.782 0c0-.812-.056-1.498-.168-2.058-.103-.57-.322-1.027-.658-1.372-.327-.345-.803-.518-1.428-.518-.635 0-1.12.173-1.456.518-.327.345-.546.803-.658 1.372-.103.56-.154 1.246-.154 2.058 0 .84.051 1.545.154 2.114.112.57.331 1.027.658 1.372.336.345.821.518 1.456.518.625 0 1.101-.173 1.428-.518.336-.345.555-.803.658-1.372.112-.57.168-1.274.168-2.114Z"
    />
    <Path
      stroke="#141414"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M356.43 40.93 362.5 47l-6.07 6.07M345.5 47h16.83"
    />
  </Svg>
);
export default SvgBal;
