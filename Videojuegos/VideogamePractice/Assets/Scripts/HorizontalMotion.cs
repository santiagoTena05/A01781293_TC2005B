/*
Move a GameObject horizontally and vertically with AWSD or arrow keys

Author Santiago Tena & Domingo Mora
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HorizontalMotion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;
    [SerializeField] float limitY;

    Vector3 move;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // two types of motions used in our game
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");

        //Debug.Log("X motion: " + move.x);
        
        // Movements in a certain range move a certain direction:: Negative in horizontal moves right
        //Limit the motion to a specifi range of coordinates
        if (transform.position.x < -limit && move.x < 0)
        {
            move.x = 0;
        }
        else if (transform.position.x > limit && move.x > 0)
        {
            move.x = 0;
        }
        
        if (transform.position.y < -limitY && move.y < 0)
        {
            move.y = 0;
        }
        else if (transform.position.y > limitY && move.y > 0)
        {
            move.y = 0;
        }
        transform.Translate(move * speed * Time.deltaTime);
    }
}
