import ReactPannellum from "react-pannellum";

export default function Panorama() {
  return (
    <div>
      <h1 className="text-4xl text-center p-5 pt-10">
        Experience Every Angle <br />
        With the <span className="text-primary">360&#xb0;</span> Camera
      </h1>
      <div>
        <div>
          <ReactPannellum
            id="panorama"
            sceneId="panorama-scene"
            imageSource={image}
            config={{
              autoLoad: true,
              compass: true,
              pitch: 10,
              yaw: 180,
              autoRotate: 2, // Auto-rotate at speed 2 (positive values for clockwise rotation)
              hfov: 100, // Adjust horizontal field of view if needed
            }}
          />
        </div>
      </div>
    </div>
  )
}
